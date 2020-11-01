
export interface Size {
    name: string;
    price: number; 
    selected: boolean;
    svg?: string;
}

export interface Service {
    id: string;
    service: string;
    svg?: string;
    price: number;
    selected: boolean
}