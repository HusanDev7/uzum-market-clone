import { defineStore } from "pinia";
import { useProductStore } from "./productStore";
export const useAddBasketStore = defineStore("addBasket", {
    state: () => ({
        basket: [],
    }),
    actions: {
        getAddBasket(id) {
            console.log(id);
            const productStore = useProductStore();
            const basketProduct = productStore.products?.find((item) => item.id == id);
            this.basket.push(basketProduct);
        },
    },
});
