/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Location Data Structure — 5. Delivery Information
 * Maintained relationship: PIN Code → Delivery Information
 * 
 * Shipping Origin: Hyderabad Hub, Telangana, India
 */

/**
 * @typedef {Object} DeliveryInfoRecord
 * @property {string} [pinCode] - 6-digit postal code (if specifically mapped)
 * @property {string} originHub - Shipping dispatch origin
 * @property {string} distanceEstimate - Approximate road/air shipping distance
 * @property {string} estimatedTransitDays - Courier network transit duration
 * @property {string} recommendedDeliveryRange - Estimated dispatch-to-doorstep window
 * @property {string} standardTailoringTimeline - Total production + delivery window
 * @property {string} courierPartner - Primary delivery network
 * @property {boolean} isExpressAvailable - Whether priority air express is supported
 * @property {string} confidence - Data verification status
 */

export const SHIPPING_HUB_CONFIG = {
  originCity: 'Hyderabad',
  originState: 'Telangana',
  originHubName: 'Hyderabad Logistics Hub',
  originPin: '500001',
  standardTailoringTimeline: '7–17 days'
};

/**
 * State Zone Transit Matrix from Hyderabad Hub
 * Structural fallback for any valid PIN code in India
 */
const ZONE_LOGISTICS_MATRIX = {
  // Intra-State / Origin
  'telangana': {
    distance: '~20–150 km',
    transit: '1–2 days',
    range: '2–3 business days',
    express: true,
    courier: 'Local Express / Bluedart'
  },
  // Immediate Neighbors (South Corridor)
  'andhra-pradesh': {
    distance: '~350–550 km',
    transit: '1–2 days',
    range: '2–4 business days',
    express: true,
    courier: 'Bluedart / DTDC'
  },
  'karnataka': {
    distance: '~570–650 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  },
  'tamil-nadu': {
    distance: '~630–750 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  },
  'kerala': {
    distance: '~850–1,100 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / India Post'
  },
  // Major Northern & Western Metros
  'maharashtra': {
    distance: '~710–850 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  },
  'delhi': {
    distance: '~1,500 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart Air / Delhivery'
  },
  'haryana': {
    distance: '~1,420 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  },
  'gujarat': {
    distance: '~950–1,200 km',
    transit: '2–3 days',
    range: '3–5 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  },
  // Eastern & Central India
  'west-bengal': {
    distance: '~1,490 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Delhivery / India Post'
  },
  'odisha': {
    distance: '~900–1,050 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Delhivery / India Post'
  },
  'madhya-pradesh': {
    distance: '~800–1,100 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Delhivery / India Post'
  },
  'uttar-pradesh': {
    distance: '~1,200–1,500 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Delhivery / India Post'
  },
  'rajasthan': {
    distance: '~1,300–1,600 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Delhivery / India Post'
  },
  // Remote / Mountain / Islands
  'jammu-and-kashmir': {
    distance: '~2,100 km',
    transit: '4–6 days',
    range: '5–8 business days',
    express: false,
    courier: 'India Post Speed Post'
  },
  'ladakh': {
    distance: '~2,400 km',
    transit: '5–7 days',
    range: '6–9 business days',
    express: false,
    courier: 'India Post Speed Post'
  },
  'andaman-and-nicobar-islands': {
    distance: '~1,650 km (Air/Sea)',
    transit: '4–6 days',
    range: '6–10 business days',
    express: false,
    courier: 'India Post Air'
  },
  'lakshadweep': {
    distance: '~1,200 km (Air/Sea)',
    transit: '5–7 days',
    range: '7–12 business days',
    express: false,
    courier: 'India Post Speed Post'
  }
};

/**
 * Specifically cached verified PIN route details.
 * @type {Record<string, Partial<DeliveryInfoRecord>>}
 */
export const PIN_DELIVERY_OVERRIDES = {
  // Telangana - Hyderabad
  '500034': { distanceEstimate: '~12 km', estimatedTransitDays: 'Same-day / 1 day', recommendedDeliveryRange: '1–2 business days' },
  '500033': { distanceEstimate: '~14 km', estimatedTransitDays: 'Same-day / 1 day', recommendedDeliveryRange: '1–2 business days' },
  '500081': { distanceEstimate: '~18 km', estimatedTransitDays: 'Same-day / 1 day', recommendedDeliveryRange: '1–2 business days' },
  '500003': { distanceEstimate: '~8 km', estimatedTransitDays: 'Same-day / 1 day', recommendedDeliveryRange: '1–2 business days' },
  '500001': { distanceEstimate: '~2 km', estimatedTransitDays: 'Same-day / 1 day', recommendedDeliveryRange: '1–2 business days' },

  // Haryana - Gurugram & Faridabad
  '122001': { distanceEstimate: '1,420 km', estimatedTransitDays: '2–3 days', recommendedDeliveryRange: '3–5 business days' },
  '122002': { distanceEstimate: '1,420 km', estimatedTransitDays: '2–3 days', recommendedDeliveryRange: '3–5 business days' },
  '122018': { distanceEstimate: '1,425 km', estimatedTransitDays: '2–3 days', recommendedDeliveryRange: '3–5 business days' },
  '122051': { distanceEstimate: '1,410 km', estimatedTransitDays: '3–4 days', recommendedDeliveryRange: '4–6 business days' },
  '121001': { distanceEstimate: '1,410 km', estimatedTransitDays: '2–3 days', recommendedDeliveryRange: '3–5 business days' },
  '121004': { distanceEstimate: '1,400 km', estimatedTransitDays: '3–4 days', recommendedDeliveryRange: '4–6 business days' }
};

/**
 * Calculates or retrieves comprehensive delivery information for a given PIN code and context.
 * @param {string} [pinCode]
 * @param {Object} [context]
 * @param {string} [context.stateId]
 * @param {string} [context.stateName]
 * @returns {DeliveryInfoRecord}
 */
export function getDeliveryInfo(pinCode, context = {}) {
  const cleanPin = pinCode ? String(pinCode).trim() : '';
  const specificPinData = cleanPin ? PIN_DELIVERY_OVERRIDES[cleanPin] : null;

  // Resolve state slug
  const stateKey = (context.stateId || context.stateName || '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');

  const zoneData = ZONE_LOGISTICS_MATRIX[stateKey] || {
    distance: '~1,200 km',
    transit: '3–4 days',
    range: '4–6 business days',
    express: true,
    courier: 'Bluedart / Delhivery'
  };

  return {
    pinCode: cleanPin || undefined,
    originHub: SHIPPING_HUB_CONFIG.originHubName,
    distanceEstimate: specificPinData?.distanceEstimate || zoneData.distance,
    estimatedTransitDays: specificPinData?.estimatedTransitDays || zoneData.transit,
    recommendedDeliveryRange: specificPinData?.recommendedDeliveryRange || zoneData.range,
    standardTailoringTimeline: SHIPPING_HUB_CONFIG.standardTailoringTimeline,
    courierPartner: zoneData.courier,
    isExpressAvailable: zoneData.express,
    confidence: specificPinData ? 'Verified Research' : 'Standard Logistics Estimation'
  };
}

/**
 * Allows dynamic extension of PIN-level delivery overrides (e.g. from future datasets).
 * @param {Record<string, Partial<DeliveryInfoRecord>>} newOverrides
 */
export function registerDeliveryOverrides(newOverrides) {
  if (newOverrides && typeof newOverrides === 'object') {
    Object.assign(PIN_DELIVERY_OVERRIDES, newOverrides);
  }
}
