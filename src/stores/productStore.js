import apiProduct from "@/helpers/api/api";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: null,
        totalCount: null,
    }),
    actions: {
        async getProduct(skip = 0, limit = 20) {
            try {
                const res = await apiProduct.getProduct(skip, limit);
                this.products = res.products;
                this.totalCount = res.total;
            } catch (error) {
                console.error(error);
            }
        },

        async getSearch(search) {
            try {
                const res = await apiProduct.getSearch(search);
                this.products = res.products;
                this.totalCount = res.total;
            } catch {
                console.log(error);
            }
        },
    },
});
