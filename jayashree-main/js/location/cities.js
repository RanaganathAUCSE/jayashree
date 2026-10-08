/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Location Data Structure — 3. Cities / Towns / Locations
 * Maintained relationship: District → City / Town / Location
 */

import { getDistrictById, getDistrictByName } from './districts.js';

/**
 * @typedef {Object} CityRecord
 * @property {string} id - Unique location slug identifier
 * @property {string} districtId - Reference to parent District id
 * @property {string} stateId - Reference to parent State id
 * @property {string} name - Official City/Town/Location display name
 * @property {string} [subDistrict] - Sub-District / Tehsil / Mandal / Taluka
 * @property {'District Headquarters' | 'Urban Area' | 'Statutory Town' | 'Census Town' | 'Locality'} [type] - Location classification
 */

/**
 * Structural City / Town / Location Registry
 * @type {CityRecord[]}
 */
export const CITY_REGISTRY = [
  // Telangana → Hyderabad District
  { id: 'hyderabad-banjara-hills', districtId: 'hyderabad', stateId: 'telangana', name: 'Banjara Hills / Jubilee Hills', subDistrict: 'Mandal: Shaikpet', type: 'Urban Area' },
  { id: 'hyderabad-madhapur-hitec', districtId: 'hyderabad', stateId: 'telangana', name: 'HITEC City / Madhapur', subDistrict: 'Mandal: Serilingampally', type: 'Urban Area' },
  { id: 'hyderabad-secunderabad', districtId: 'hyderabad', stateId: 'telangana', name: 'Secunderabad Central', subDistrict: 'Mandal: Marredpally', type: 'District Headquarters' },
  { id: 'hyderabad-abids-koti', districtId: 'hyderabad', stateId: 'telangana', name: 'Abids / Koti Commercial Center', subDistrict: 'Mandal: Nampally', type: 'Urban Area' },
  { id: 'hyderabad-charminar-oldcity', districtId: 'hyderabad', stateId: 'telangana', name: 'Old City / Charminar', subDistrict: 'Mandal: Charminar', type: 'Urban Area' },

  // Telangana → Rangareddy District
  { id: 'rangareddy-gachibowli', districtId: 'rangareddy', stateId: 'telangana', name: 'Gachibowli Financial District', subDistrict: 'Mandal: Serilingampally', type: 'Urban Area' },
  { id: 'rangareddy-shamshabad', districtId: 'rangareddy', stateId: 'telangana', name: 'Shamshabad (Airport Zone)', subDistrict: 'Mandal: Shamshabad', type: 'Statutory Town' },

  // Haryana → Gurugram District
  { id: 'gurugram-cyber-city', districtId: 'gurugram', stateId: 'haryana', name: 'Gurugram (Cyber City / Sector 29)', subDistrict: 'Tehsil: Gurugram', type: 'District Headquarters' },
  { id: 'gurugram-sohna-road', districtId: 'gurugram', stateId: 'haryana', name: 'Sohna Road / Golf Course Ext', subDistrict: 'Tehsil: Badshahpur', type: 'Urban Area' },
  { id: 'gurugram-manesar', districtId: 'gurugram', stateId: 'haryana', name: 'IMT Manesar', subDistrict: 'Tehsil: Manesar', type: 'Statutory Town' },

  // Haryana → Faridabad District
  { id: 'faridabad-central', districtId: 'faridabad', stateId: 'haryana', name: 'Faridabad Central (Sector 15-16)', subDistrict: 'Tehsil: Faridabad', type: 'District Headquarters' },
  { id: 'faridabad-ballabgarh', districtId: 'faridabad', stateId: 'haryana', name: 'Ballabgarh Industrial Zone', subDistrict: 'Tehsil: Ballabgarh', type: 'Statutory Town' },

  // Karnataka → Bengaluru Urban
  { id: 'bengaluru-koramangala-indiranagar', districtId: 'bengaluru-urban', stateId: 'karnataka', name: 'Koramangala / Indiranagar', subDistrict: 'Taluk: Bengaluru South', type: 'Urban Area' },
  { id: 'bengaluru-whitefield', districtId: 'bengaluru-urban', stateId: 'karnataka', name: 'Whitefield Tech Corridor', subDistrict: 'Taluk: Bengaluru East', type: 'Urban Area' },

  // Maharashtra → Mumbai City
  { id: 'mumbai-nariman-point-fort', districtId: 'mumbai-city', stateId: 'maharashtra', name: 'Fort / Nariman Point / Colaba', subDistrict: 'Zone: South Mumbai', type: 'District Headquarters' },
  { id: 'mumbai-bandra-bkc', districtId: 'mumbai-city', stateId: 'maharashtra', name: 'Bandra West / BKC', subDistrict: 'Zone: Western Suburbs', type: 'Urban Area' },

  // Tamil Nadu → Chennai
  { id: 'chennai-anna-nagar', districtId: 'chennai', stateId: 'tamil-nadu', name: 'Anna Nagar / T. Nagar', subDistrict: 'Taluk: Egmore', type: 'Urban Area' },
  { id: 'chennai-adyar-omr', districtId: 'chennai', stateId: 'tamil-nadu', name: 'Adyar / OMR IT Expressway', subDistrict: 'Taluk: Mylapore', type: 'Urban Area' },

  // Delhi → New Delhi
  { id: 'delhi-connaught-place', districtId: 'new-delhi', stateId: 'delhi', name: 'Connaught Place / Barakhamba', subDistrict: 'Sub-Division: Chanakyapuri', type: 'District Headquarters' },
  { id: 'delhi-saket-hauz-khas', districtId: 'south-delhi', stateId: 'delhi', name: 'Saket / Hauz Khas', subDistrict: 'Sub-Division: Hauz Khas', type: 'Urban Area' }
];

/**
 * Resolves a district identifier from slug or name.
 * @param {string} districtQuery
 * @param {string} [stateContext]
 * @returns {string | null}
 */
function resolveDistrictId(districtQuery, stateContext) {
  if (!districtQuery) return null;
  const distObj = getDistrictById(districtQuery) || getDistrictByName(districtQuery, stateContext);
  return distObj ? distObj.id : String(districtQuery).trim().toLowerCase().replace(/\s+/g, '-');
}

/**
 * Returns all cities/towns/locations in a specified District.
 * @param {string} districtIdOrName
 * @param {string} [stateContext]
 * @returns {CityRecord[]}
 */
export function getCitiesByDistrict(districtIdOrName, stateContext) {
  const districtId = resolveDistrictId(districtIdOrName, stateContext);
  if (!districtId) return [];
  return CITY_REGISTRY.filter(c => c.districtId === districtId);
}

/**
 * Returns all cities belonging to a state.
 * @param {string} stateIdOrName
 * @returns {CityRecord[]}
 */
export function getCitiesByState(stateIdOrName) {
  if (!stateIdOrName) return [];
  const q = String(stateIdOrName).trim().toLowerCase().replace(/\s+/g, '-');
  return CITY_REGISTRY.filter(c => c.stateId === q || c.stateId.toLowerCase() === stateIdOrName.toLowerCase());
}

/**
 * Look up a city by its slug identifier.
 * @param {string} cityId
 * @returns {CityRecord | undefined}
 */
export function getCityById(cityId) {
  if (!cityId) return undefined;
  const q = String(cityId).trim().toLowerCase();
  return CITY_REGISTRY.find(c => c.id === q);
}

/**
 * Look up a city by name within a district or globally.
 * @param {string} cityName
 * @param {string} [districtContext]
 * @returns {CityRecord | undefined}
 */
export function getCityByName(cityName, districtContext) {
  if (!cityName) return undefined;
  const q = String(cityName).trim().toLowerCase();
  const districtId = districtContext ? resolveDistrictId(districtContext) : null;

  return CITY_REGISTRY.find(c => {
    const matchesName = c.name.toLowerCase() === q || c.id === q;
    return districtId ? (matchesName && c.districtId === districtId) : matchesName;
  });
}

/**
 * Registers new cities dynamically into the registry.
 * @param {CityRecord[]} newCities
 */
export function registerCities(newCities) {
  if (!Array.isArray(newCities)) return;
  newCities.forEach(c => {
    if (c && c.id && c.districtId && !CITY_REGISTRY.some(x => x.id === c.id)) {
      CITY_REGISTRY.push(c);
    }
  });
}
