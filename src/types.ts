

export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboards: Billboard;
}

export interface Size{
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Image {
    id: string;
    url: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
    size:Size;
    color:Color;
    images: Image[];
}