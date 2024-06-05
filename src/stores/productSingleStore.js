import { defineStore } from "pinia";
import apiProduct from "@/helpers/api/api";


export const useProductSingleStore = defineStore("productSingle", {
    state: () => ({
        product: null,
    }),
    actions: {
        async getSingleProduct(id) {
            try {
                const res = await apiProduct.getSingleProduct(id);
                this.product = { ...res, quantity: 1 };
            } catch (error) {
                console.error(error);
            }
        },
    },
});