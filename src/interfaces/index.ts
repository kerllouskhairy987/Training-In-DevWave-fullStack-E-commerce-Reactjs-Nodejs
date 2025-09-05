export interface IProduct {
    _id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    rating: number;
    stock: number;
    brand: string;
    stars: number;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ICategory {
    _id: string;
    name: string;
    description: string;
}

export interface IResponseProduct {
    page: number;
    pages: number;
    products: IProduct[];
    success: boolean;
    total: number;
}

export interface IResponseCategory {
    success: boolean;
    categories: ICategory[]
}

export interface ICreateCAtegoryResponse {
    message: string;
    success: boolean;
}

export interface IFormField {
    name: string;
    label?: string;
    type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "time"
    | "tel"
    | "file"
    | "datetime-local"
    | "checkbox"
    | "radio"
    | "select"
    | "hidden"
    | "textarea";
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    id?: string;
    defaultValue?: string;
    readOnly?: boolean;
}