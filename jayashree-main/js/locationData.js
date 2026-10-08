/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Jayashree Fashion Designer — India-Wide Location & Delivery Service Facade
 * 
 * Re-exports the modular 5-tier location architecture:
 * 1. States / Union Territories (./location/states.js)
 * 2. Districts (./location/districts.js)
 * 3. Cities / Towns / Locations (./location/cities.js)
 * 4. PIN Codes (./location/pincodes.js)
 * 5. Delivery Information (./location/delivery.js)
 */

import { locationService } from './location/index.js';

export { locationService };
export * from './location/index.js';

let dynamicLocations = [];
let syncedDriveFiles = [];

/**
 * Returns formatted location flat records for legacy consumers.
 */
export function getAllLocations() {
  const states = locationService.getStates();
  const records = [];

  states.forEach(st => {
    const districts = locationService.getDistricts(st.id);
    districts.forEach(d => {
      const cities = locationService.getCities(d.id, st.id);
      cities.forEach(c => {
        const pins = locationService.getPins(c.id);
        const pinCodes = pins.map(p => p.pin);
        const deliveryInfo = locationService.getDeliveryInfo(pinCodes[0], { stateId: st.id, stateName: st.name });

        records.push({
          state: st.name,
          district: d.name,
          subDistrict: c.subDistrict || '',
          locationName: c.name,
          locationType: c.type || 'Urban Area',
          pinCodes: pinCodes.length > 0 ? pinCodes : ['500001'],
          distanceFromHyderabad: deliveryInfo.distanceEstimate,
          estimatedTransitDays: deliveryInfo.estimatedTransitDays,
          recommendedDeliveryRange: deliveryInfo.recommendedDeliveryRange,
          dataSource: 'Hierarchical Location Service',
          confidence: deliveryInfo.confidence
        });
      });
    });
  });

  return [...records, ...dynamicLocations];
}

export function getStates() {
  return locationService.getStates().map(s => s.name);
}

export function getDistricts(state) {
  return locationService.getDistricts(state).map(d => d.name);
}

export function getLocations(state, district) {
  return locationService.getCities(district, state);
}

export function findLocation(state, district, locationName) {
  const hierarchy = locationService.resolveHierarchy({ state, district, city: locationName });
  if (!hierarchy.city) return undefined;
  return {
    state: hierarchy.state?.name || state,
    district: hierarchy.district?.name || district,
    subDistrict: hierarchy.city.subDistrict || '',
    locationName: hierarchy.city.name,
    locationType: hierarchy.city.type || 'Urban Area',
    pinCodes: hierarchy.options.pins.map(p => p.pin),
    distanceFromHyderabad: hierarchy.deliveryInfo.distanceEstimate,
    estimatedTransitDays: hierarchy.deliveryInfo.estimatedTransitDays,
    recommendedDeliveryRange: hierarchy.deliveryInfo.recommendedDeliveryRange
  };
}

export function findLocationByPin(pin) {
  const rev = locationService.lookupByPin(pin);
  if (!rev || !rev.city) return undefined;
  return {
    state: rev.state?.name || '',
    district: rev.district?.name || '',
    subDistrict: rev.city.subDistrict || '',
    locationName: rev.city.name,
    locationType: rev.city.type || 'Urban Area',
    pinCodes: [String(pin).trim()],
    distanceFromHyderabad: rev.deliveryInfo.distanceEstimate,
    estimatedTransitDays: rev.deliveryInfo.estimatedTransitDays,
    recommendedDeliveryRange: rev.deliveryInfo.recommendedDeliveryRange
  };
}

export function addDriveLocations(newRecords, fileMeta) {
  if (Array.isArray(newRecords) && newRecords.length > 0) {
    dynamicLocations = [...dynamicLocations, ...newRecords];
  }
  if (fileMeta) {
    syncedDriveFiles.push({
      ...fileMeta,
      syncDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    });
  }
}

export function getSyncedDriveFiles() {
  return syncedDriveFiles;
}
