export enum PropertyTypes {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT',
  COMMERCIAL = 'COMMERCIAL',
  LAND = 'LAND',
  INDUSTRIAL = 'INDUSTRIAL',
  MISCELLANEOUS = 'MISCELLANEOUS',
}

export enum PropertyStatuses {
  AVAILABLE = 'AVAILABLE',
  PENDING = 'PENDING',
  SOLD = 'SOLD',
}

export interface PropertyFormData {
  street: string;
  city: string;
  state: string;
  postalCode?: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  description?: string;
  additionalInfo: string;
  price: number;
  propertyType: PropertyTypes;
  propertyStatus: PropertyStatuses;
  pictures: File[];
  coverPictureIndex: number;
}
