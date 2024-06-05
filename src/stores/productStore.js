import apiProduct from "@/helpers/api/api";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: null,
    }),
    actions: {
        async getProduct(skip = 0, limit = 10) {
            try {
                const res = await apiProduct.getProduct(skip, limit);
                this.products = res.products;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
