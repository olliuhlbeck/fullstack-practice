export enum PropertyTypes {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT',
  COMMERCIAL = 'COMMERCIAL',
  LAND = 'LAND',
  INDUSTRIAL = 'INDUSTRIAL',
  MISCELLANEOUS = 'MISCELLANEOUS',
}

export enum PropertyStatus {
  AVAILABLE = 'AVAILABLE',
  PENDING = 'PENDING',
  SOLD = 'SOLD',
}

export interface CreatePropertyDTO {
  street: string;
  city: string;
  state: string;
  postalCode?: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  description: string;
  additionalInfo: string;
  price: number;
  propertyType: PropertyTypes;
  propertyStatus: PropertyStatus;
  pictures: string[];
  coverPictureIndex: number;
}

export interface CreatePropertyResponse {
  message: string;
  propertyId: number;
}
