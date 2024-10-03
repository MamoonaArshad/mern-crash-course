import { create } from "zustand";


export const useProductStore = create((set) => ({
    product: [],
    setProduct: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if(!newProduct.name ||!newProduct.price || !newProduct.image) {
            return {success: false, message: "please fill in all fields" }
        }
        const res = await fetch("/api/products", )
    }
}));

