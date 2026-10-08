/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Jayashree Fashion Designer — India-Wide Location & Delivery Service TypeScript Facade
 */

export interface LocationRecord {
  state: string;
  district: string;
  subDistrict: string;
  locationName: string;
  locationType: 'District Headquarters' | 'City' | 'Statutory Town' | 'Census Town' | 'Urban Area' | 'Village' | 'Rural Settlement';
  pinCodes: string[];
  distanceFromHyderabad: string;
  estimatedTransitDays: string;
  recommendedDeliveryRange: string;
  dataSource: string;
  confidence: 'Verified' | 'Estimated' | 'Inferred';
}

export * from './locationData.js';
