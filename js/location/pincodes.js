/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Location Data Structure — 4. PIN Codes
 * Maintained relationship: City / Town / Location → PIN Code
 */

import { getCityById, getCityByName } from './cities.js';

/**
 * @typedef {Object} PinRecord
 * @property {string} pin - 6-digit standard Postal Index Number
 * @property {string} cityId - Reference to parent City id
 * @property {string} districtId - Reference to parent District id
 * @property {string} stateId - Reference to parent State id
 * @property {string} postOfficeName - Primary post office / delivery beat name
 * @property {'Delivery' | 'Non-Delivery'} [deliveryStatus] - Postal branch delivery type
 */

/**
 * Structural PIN Code Registry
 * Maps 6-digit PIN codes cleanly into the City → District → State hierarchy.
 * @type {PinRecord[]}
 */
export const PIN_REGISTRY = [
  // Telangana → Hyderabad District
  { pin: '500034', cityId: 'hyderabad-banjara-hills', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Banjara Hills SO', deliveryStatus: 'Delivery' },
  { pin: '500033', cityId: 'hyderabad-banjara-hills', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Jubilee Hills SO', deliveryStatus: 'Delivery' },
  { pin: '500081', cityId: 'hyderabad-madhapur-hitec', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Madhapur SO', deliveryStatus: 'Delivery' },
  { pin: '500003', cityId: 'hyderabad-secunderabad', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Secunderabad HO', deliveryStatus: 'Delivery' },
  { pin: '500001', cityId: 'hyderabad-abids-koti', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Hyderabad GPO (Abids)', deliveryStatus: 'Delivery' },
  { pin: '500002', cityId: 'hyderabad-charminar-oldcity', districtId: 'hyderabad', stateId: 'telangana', postOfficeName: 'Charminar SO', deliveryStatus: 'Delivery' },

  // Telangana → Rangareddy District
  { pin: '500032', cityId: 'rangareddy-gachibowli', districtId: 'rangareddy', stateId: 'telangana', postOfficeName: 'Gachibowli SO', deliveryStatus: 'Delivery' },
  { pin: '501218', cityId: 'rangareddy-shamshabad', districtId: 'rangareddy', stateId: 'telangana', postOfficeName: 'Shamshabad SO', deliveryStatus: 'Delivery' },

  // Haryana → Gurugram District
  { pin: '122001', cityId: 'gurugram-cyber-city', districtId: 'gurugram', stateId: 'haryana', postOfficeName: 'Gurugram Central HO', deliveryStatus: 'Delivery' },
  { pin: '122002', cityId: 'gurugram-cyber-city', districtId: 'gurugram', stateId: 'haryana', postOfficeName: 'DLF Phase II SO', deliveryStatus: 'Delivery' },
  { pin: '122018', cityId: 'gurugram-sohna-road', districtId: 'gurugram', stateId: 'haryana', postOfficeName: 'Sohna Road SO', deliveryStatus: 'Delivery' },
  { pin: '122051', cityId: 'gurugram-manesar', districtId: 'gurugram', stateId: 'haryana', postOfficeName: 'Manesar SO', deliveryStatus: 'Delivery' },

  // Haryana → Faridabad District
  { pin: '121001', cityId: 'faridabad-central', districtId: 'faridabad', stateId: 'haryana', postOfficeName: 'Faridabad NIT HO', deliveryStatus: 'Delivery' },
  { pin: '121004', cityId: 'faridabad-ballabgarh', districtId: 'faridabad', stateId: 'haryana', postOfficeName: 'Ballabgarh SO', deliveryStatus: 'Delivery' },

  // Karnataka → Bengaluru Urban
  { pin: '560034', cityId: 'bengaluru-koramangala-indiranagar', districtId: 'bengaluru-urban', stateId: 'karnataka', postOfficeName: 'Koramangala SO', deliveryStatus: 'Delivery' },
  { pin: '560066', cityId: 'bengaluru-whitefield', districtId: 'bengaluru-urban', stateId: 'karnataka', postOfficeName: 'Whitefield SO', deliveryStatus: 'Delivery' },

  // Maharashtra → Mumbai City
  { pin: '400001', cityId: 'mumbai-nariman-point-fort', districtId: 'mumbai-city', stateId: 'maharashtra', postOfficeName: 'Mumbai GPO (Fort)', deliveryStatus: 'Delivery' },
  { pin: '400051', cityId: 'mumbai-bandra-bkc', districtId: 'mumbai-city', stateId: 'maharashtra', postOfficeName: 'Bandra Kurla Complex SO', deliveryStatus: 'Delivery' },

  // Tamil Nadu → Chennai
  { pin: '600040', cityId: 'chennai-anna-nagar', districtId: 'chennai', stateId: 'tamil-nadu', postOfficeName: 'Anna Nagar SO', deliveryStatus: 'Delivery' },
  { pin: '600096', cityId: 'chennai-adyar-omr', districtId: 'chennai', stateId: 'tamil-nadu', postOfficeName: 'Perungudi / OMR SO', deliveryStatus: 'Delivery' },

  // Delhi → New Delhi
  { pin: '110001', cityId: 'delhi-connaught-place', districtId: 'new-delhi', stateId: 'delhi', postOfficeName: 'New Delhi GPO', deliveryStatus: 'Delivery' },
  { pin: '110017', cityId: 'delhi-saket-hauz-khas', districtId: 'south-delhi', stateId: 'delhi', postOfficeName: 'Saket SO', deliveryStatus: 'Delivery' }
];

/**
 * Validates whether a given string is a valid Indian 6-digit postal code format.
 * Rules: Exactly 6 digits, first digit between 1 and 9.
 * @param {string | number} pin
 * @returns {boolean}
 */
export function validatePinCode(pin) {
  if (!pin) return false;
  const str = String(pin).trim();
  return /^[1-9][0-9]{5}$/.test(str);
}

/**
 * Finds all PIN codes assigned to a specified City/Location.
 * @param {string} cityIdOrName
 * @returns {PinRecord[]}
 */
export function getPinsByCity(cityIdOrName) {
  if (!cityIdOrName) return [];
  const city = getCityById(cityIdOrName) || getCityByName(cityIdOrName);
  const cityId = city ? city.id : String(cityIdOrName).trim().toLowerCase();
  return PIN_REGISTRY.filter(p => p.cityId === cityId);
}

/**
 * Look up a PIN record by its 6-digit code.
 * @param {string | number} pin
 * @returns {PinRecord | undefined}
 */
export function lookupPin(pin) {
  if (!pin) return undefined;
  const cleanPin = String(pin).trim();
  return PIN_REGISTRY.find(p => p.pin === cleanPin);
}

/**
 * Registers new PIN records dynamically.
 * @param {PinRecord[]} newPins
 */
export function registerPins(newPins) {
  if (!Array.isArray(newPins)) return;
  newPins.forEach(p => {
    if (p && p.pin && p.cityId && !PIN_REGISTRY.some(x => x.pin === p.pin)) {
      PIN_REGISTRY.push(p);
    }
  });
}
