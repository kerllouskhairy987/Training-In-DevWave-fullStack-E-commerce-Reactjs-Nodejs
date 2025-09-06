import type { IFormField } from "@/interfaces";

const useFormFields = ({ slug }: { slug: string }) => {
    const createCategoryFields = (): IFormField[] => [
        {
            name: "name",
            label: "Category Name",
            type: "text",
            autoFocus: true,
        },
        {
            name: "description",
            label: "Category description",
            type: "text",
        },
    ];

    const createProductFields = (): IFormField[] => [
        {
            name: "name",
            label: "Title",
            type: "text",
            autoFocus: true,
        },
        {
            name: "brand",
            label: "Brand",
            type: "text",
        },
        {
            name: "description",
            label: "Description",
            type: "text",
        },
        {
            name: "price",
            label: "Price",
            type: "number",
        },
        {
            name: "stock",
            label: "Stock",
            type: "number",
        },
        {
            name: "images",
            label: "Product Images",
            type: "image-upload",
            maxImages: 5,
        },
        {
            name: "stars",
            label: "Stars",
            type: "number",
            max: 5
        },
        {
            name: "discount",
            label: "Discount",
            type: "number",
            max: 100
        },
    ];

    const getFormFields = (): IFormField[] => {
        switch (slug) {
            case "create-product":
                return createProductFields();
            case "create-category":
                return createCategoryFields();
            case "update":
                return [];
            default:
                return [];
        }
    };

    return {
        getFormFields,
    };
};

export default useFormFields;
