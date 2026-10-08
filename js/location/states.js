/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Location Data Structure — 1. States & Union Territories
 * Canonical list of all 28 States and 8 Union Territories of India.
 */

/**
 * @typedef {Object} StateRecord
 * @property {string} id - Unique identifier (slug)
 * @property {string} name - Official display name
 * @property {'State' | 'Union Territory'} type - Administrative type
 * @property {string} code - Two-letter standard code
 */

export const STATES_AND_UTS = [
  // 28 States
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', type: 'State', code: 'AP' },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', type: 'State', code: 'AR' },
  { id: 'assam', name: 'Assam', type: 'State', code: 'AS' },
  { id: 'bihar', name: 'Bihar', type: 'State', code: 'BR' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', type: 'State', code: 'CG' },
  { id: 'goa', name: 'Goa', type: 'State', code: 'GA' },
  { id: 'gujarat', name: 'Gujarat', type: 'State', code: 'GJ' },
  { id: 'haryana', name: 'Haryana', type: 'State', code: 'HR' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', type: 'State', code: 'HP' },
  { id: 'jharkhand', name: 'Jharkhand', type: 'State', code: 'JH' },
  { id: 'karnataka', name: 'Karnataka', type: 'State', code: 'KA' },
  { id: 'kerala', name: 'Kerala', type: 'State', code: 'KL' },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', type: 'State', code: 'MP' },
  { id: 'maharashtra', name: 'Maharashtra', type: 'State', code: 'MH' },
  { id: 'manipur', name: 'Manipur', type: 'State', code: 'MN' },
  { id: 'meghalaya', name: 'Meghalaya', type: 'State', code: 'ML' },
  { id: 'mizoram', name: 'Mizoram', type: 'State', code: 'MZ' },
  { id: 'nagaland', name: 'Nagaland', type: 'State', code: 'NL' },
  { id: 'odisha', name: 'Odisha', type: 'State', code: 'OD' },
  { id: 'punjab', name: 'Punjab', type: 'State', code: 'PB' },
  { id: 'rajasthan', name: 'Rajasthan', type: 'State', code: 'RJ' },
  { id: 'sikkim', name: 'Sikkim', type: 'State', code: 'SK' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', type: 'State', code: 'TN' },
  { id: 'telangana', name: 'Telangana', type: 'State', code: 'TG' },
  { id: 'tripura', name: 'Tripura', type: 'State', code: 'TR' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', type: 'State', code: 'UP' },
  { id: 'uttarakhand', name: 'Uttarakhand', type: 'State', code: 'UK' },
  { id: 'west-bengal', name: 'West Bengal', type: 'State', code: 'WB' },

  // 8 Union Territories
  { id: 'andaman-and-nicobar-islands', name: 'Andaman and Nicobar Islands', type: 'Union Territory', code: 'AN' },
  { id: 'chandigarh', name: 'Chandigarh', type: 'Union Territory', code: 'CH' },
  { id: 'dadra-and-nagar-haveli-and-daman-and-diu', name: 'Dadra and Nagar Haveli and Daman and Diu', type: 'Union Territory', code: 'DH' },
  { id: 'delhi', name: 'Delhi', type: 'Union Territory', code: 'DL' },
  { id: 'jammu-and-kashmir', name: 'Jammu and Kashmir', type: 'Union Territory', code: 'JK' },
  { id: 'ladakh', name: 'Ladakh', type: 'Union Territory', code: 'LA' },
  { id: 'lakshadweep', name: 'Lakshadweep', type: 'Union Territory', code: 'LD' },
  { id: 'puducherry', name: 'Puducherry', type: 'Union Territory', code: 'PY' }
];

/**
 * Returns all States and Union Territories.
 * @returns {StateRecord[]}
 */
export function getStates() {
  return [...STATES_AND_UTS];
}

/**
 * Look up a state by its unique ID (slug) or code.
 * @param {string} idOrCode
 * @returns {StateRecord | undefined}
 */
export function getStateById(idOrCode) {
  if (!idOrCode) return undefined;
  const q = String(idOrCode).trim().toLowerCase();
  return STATES_AND_UTS.find(s => s.id === q || s.code.toLowerCase() === q);
}

/**
 * Look up a state by exact or case-insensitive name.
 * @param {string} name
 * @returns {StateRecord | undefined}
 */
export function getStateByName(name) {
  if (!name) return undefined;
  const q = String(name).trim().toLowerCase();
  return STATES_AND_UTS.find(s => s.name.toLowerCase() === q);
}
