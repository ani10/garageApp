
export interface Size {
    name: String;
    price: Number; 
    selected: boolean
}

export interface Service {
    id: String;
    service: String;
    svg?: String;
    price: Number;
    selected: boolean
}