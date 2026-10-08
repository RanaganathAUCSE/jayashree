/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Hierarchical Location Service — Main Orchestrator
 * 
 * Enforces and navigates the 5-tier relationship:
 * State
 *   → District
 *     → City / Town / Location
 *       → PIN Code
 *         → Delivery Information
 */

import { STATES_AND_UTS, getStates, getStateById, getStateByName } from './states.js';
import { DISTRICT_REGISTRY, getDistrictsByState, getDistrictById, getDistrictByName, registerDistricts } from './districts.js';
import { CITY_REGISTRY, getCitiesByDistrict, getCitiesByState, getCityById, getCityByName, registerCities } from './cities.js';
import { PIN_REGISTRY, validatePinCode, getPinsByCity, lookupPin, registerPins } from './pincodes.js';
import { SHIPPING_HUB_CONFIG, getDeliveryInfo, registerDeliveryOverrides } from './delivery.js';

export {
  STATES_AND_UTS,
  DISTRICT_REGISTRY,
  CITY_REGISTRY,
  PIN_REGISTRY,
  SHIPPING_HUB_CONFIG
};

export const locationService = {
  // Tier 1: States / Union Territories
  getStates,
  getStateById,
  getStateByName,

  // Tier 2: Districts (child of State)
  getDistricts(stateIdOrName) {
    return getDistrictsByState(stateIdOrName);
  },
  getDistrictById,
  getDistrictByName,

  // Tier 3: Cities / Towns / Locations (child of District)
  getCities(districtIdOrName, stateContext) {
    return getCitiesByDistrict(districtIdOrName, stateContext);
  },
  getCitiesByState,
  getCityById,
  getCityByName,

  // Tier 4: PIN Codes (child of City / Town / Location)
  getPins(cityIdOrName) {
    return getPinsByCity(cityIdOrName);
  },
  lookupPin,
  validatePinCode,

  // Tier 5: Delivery Information (child of PIN Code / Location)
  getDeliveryInfo(pinCode, context) {
    return getDeliveryInfo(pinCode, context);
  },

  /**
   * Complete top-down hierarchical query:
   * Given any partial or full selection (state, district, city, pin),
   * returns the connected hierarchical node and available options for the next tier.
   * 
   * @param {Object} query
   * @param {string} [query.state]
   * @param {string} [query.district]
   * @param {string} [query.city]
   * @param {string} [query.pin]
   */
  resolveHierarchy(query = {}) {
    const stateObj = query.state ? (getStateByName(query.state) || getStateById(query.state)) : null;
    const availableDistricts = stateObj ? getDistrictsByState(stateObj.id) : [];

    const districtObj = (stateObj && query.district)
      ? (getDistrictByName(query.district, stateObj.id) || getDistrictById(query.district))
      : null;
    const availableCities = districtObj ? getCitiesByDistrict(districtObj.id, stateObj?.id) : [];

    const cityObj = (districtObj && query.city)
      ? (getCityByName(query.city, districtObj.id) || getCityById(query.city))
      : null;
    const availablePins = cityObj ? getPinsByCity(cityObj.id) : [];

    const pinRecord = query.pin ? lookupPin(query.pin) : null;
    const deliveryInfo = getDeliveryInfo(query.pin || pinRecord?.pin, {
      stateId: stateObj?.id || pinRecord?.stateId,
      stateName: stateObj?.name
    });

    return {
      state: stateObj,
      district: districtObj,
      city: cityObj,
      pin: pinRecord,
      deliveryInfo,
      options: {
        districts: availableDistricts,
        cities: availableCities,
        pins: availablePins
      }
    };
  },

  /**
   * Reverse hierarchy lookup:
   * Given a 6-digit PIN code, ascends the hierarchy tree:
   * PIN Code → City / Town / Location → District → State → Delivery Information
   * 
   * @param {string | number} pinCode
   */
  lookupByPin(pinCode) {
    const pin = String(pinCode).trim();
    if (!validatePinCode(pin)) return null;

    const pinRecord = lookupPin(pin);
    if (!pinRecord) {
      // General postal zone fallback
      return {
        pin,
        city: null,
        district: null,
        state: null,
        deliveryInfo: getDeliveryInfo(pin)
      };
    }

    const city = getCityById(pinRecord.cityId);
    const district = getDistrictById(pinRecord.districtId);
    const state = getStateById(pinRecord.stateId);
    const deliveryInfo = getDeliveryInfo(pin, {
      stateId: pinRecord.stateId,
      stateName: state?.name
    });

    return {
      pin,
      pinRecord,
      city,
      district,
      state,
      deliveryInfo
    };
  },

  /**
   * Incremental dataset ingestion interface:
   * Allows registering future bulk location datasets cleanly.
   */
  registerDataset({ districts, cities, pincodes, deliveryOverrides }) {
    if (districts) registerDistricts(districts);
    if (cities) registerCities(cities);
    if (pincodes) registerPins(pincodes);
    if (deliveryOverrides) registerDeliveryOverrides(deliveryOverrides);
  }
};

export default locationService;
