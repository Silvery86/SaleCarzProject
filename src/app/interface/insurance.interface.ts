export interface Insurance {

  productId: number;
  productName: string;
  description: string;
  insuranceBenefit: string;
  insuranceRate: number;
  pictureproduct: string;
  productp: number;
  companyId: number;
  vehicleId: number;
  companyName: string;
  address: string;
  phone: string;
  hotline: string;
  term: string;
  logo: string;
  companyirate: number;
  vehicleType: string;
  vehicleirate: number;
}
export interface Companies {
  companyId: number;
  companyName: string;
  address: string;
  phone: string;
  hotline: string;
  term: string;
  logo: string;
  companyirate: number;
}
export interface Vehicle {
  vehicleId: number;
  vehicleType: string;
  vehicleirate: number;
}
