export type Vehicle = {
    "model": string;
    "color": string;
    "year": number;
    "power": number;
}

export interface Car extends Vehicle {
    "bodyType": string;
    "wheelCount": number;
}

export interface Plane extends Vehicle {
    "wingspan": number;
}

export interface Boat extends Vehicle {
    "draft": number;
}