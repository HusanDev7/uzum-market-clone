import { defineStore } from "pinia";
import { useProductStore } from "./productStore";

export const useFavoriteStore = defineStore("favorite", {
    state: () => ({
        favorite: [],

    }),
    actions: {
        addFavStore(card) {
            const productStore = useProductStore();
            const index = this.favorite.findIndex((item) => item.id === card.id);
            if (index !== -1) {
                this.favorite.splice(index, 1);
            } else {
                const addFav = productStore.products.find((item) => item.id === card.id);
                this.favorite.push(addFav);
            }
        },

    },
    persist: true,
});
