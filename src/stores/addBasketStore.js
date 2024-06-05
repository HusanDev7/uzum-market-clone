import { defineStore } from "pinia";
// import { useProductStore } from "./productStore";

export const useAddBasketStore = defineStore("addBasket", {
    state: () => ({
        basket: [],
    }),

    actions: {
        getAddBasket(card) {
            console.log(card);

            const basketObj = this.basket?.find(item => item.id == card.id)
            const basketIndex = this.basket?.findIndex(item => item.id == card.id)

            if (card.id == basketObj?.id) {
                this.basket[basketIndex].quantity += card.quantity
            } else {
                this.basket.push(card)

            }
        },

        removeProduct(card) {
            const index = this.basket.findIndex((item) => item.id === card)
            if (index !== -1) {
                this.basket.splice(index, 1)
            }
        },

        incrementQ(card) {
            if (card.quantity < card.minimumOrderQuantity) {
                card.quantity += 1;
            }

        },

        decrementQ(card) {
            if (card.quantity > 1) {
                card.quantity -= 1;
            }
        },
    },

    getters: {
        totallSum() {
            return this.basket.reduce((sum, product) => sum + (product.price || 0) * product.quantity, 0)
        }
    },
    persist: true,
});