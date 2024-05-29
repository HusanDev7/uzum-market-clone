import { defineStore } from "pinia";
import { useProductStore } from "./productStore";

export const useAddBasketStore = defineStore("addBasket", {
    state: () => ({
        basket: [],
    }),

    actions: {
        getAddBasket(card) {
            const productStore = useProductStore();
            const basketProduct = productStore.products?.find((item) => item.id == card.id);

            if (basketProduct) {
                const existingProduct = this.basket.find((item) => item.id == card.id);
                if (!existingProduct) {
                    this.basket.push({ ...basketProduct, quantity: 1 });
                }
            }
        },

        removeProduct(card) {
            const index = this.basket.findIndex((item) => item.id === card)
            if (index !== -1) {
                this.basket.splice(index, 1)
            }
        },

        incrementQ(card) {
            const index = this.basket.findIndex((item) => item.id === card);
            if (index !== -1) {
                this.basket[index].quantity += 1;
            }
        },

        decrementQ(card) {
            const index = this.basket.findIndex((item) => item.id === card.id);
            if (index !== -1) {
                if (this.basket[index].quantity > 1) {
                    this.basket[index].quantity -= 1;
                }
            }
        }
    },

    getters: {
        totallSum() {
            return this.basket.reduce((sum, product) => sum + (product.price || 0) * product.quantity, 0)
        }
    },
    persist: true
});