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
<<<<<<< HEAD
}

// ----------------------------------------------------------------------
// state management

export interface IGetCartResponse {
    success: boolean;
    message: string;
    data: {
        _id: string;
        user: string;
        items: {
            product: {
                _id: string;
                name: string;
                price: number;
                images: string[];
            };
            quantity: number;
            price: number;
            _id: string;
        }[];
        totalAmount: number;
    };
}

export interface IAddToCartResponse {
    success: boolean;
    message: string;
    data: {
        _id: string;
        user: string;
        items: {
            product: {
                _id: string;
                name: string;
                price: number;
            };
            quantity: number;
            price: number;
            _id: string;
        }[];
    };
}
=======
}
>>>>>>> ProfileToUser
