export interface Address {
    postoffice: string;
    policeStation: string;
    subDistrict: string;
    district: string;
    country: string;
    postalCode: string;
}

export interface RuralAddress extends Address {
    village: string;
    union: string;
    ward: string;
}

export interface UrbanAddress extends Address {
    city: string;
    ward: string;
}

export interface User {
    id?: string;
    email: string;
    permanentAddress: RuralAddress | UrbanAddress;
}
