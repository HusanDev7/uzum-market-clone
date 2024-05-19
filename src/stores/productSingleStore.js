import apiProduct from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useProductSingleStore = defineStore('productSingle', {
    state: () => ({
        product: null
    }),

    actions: {
        async getSingleProduct(id) {
            try {
                const res = await apiProduct.getSingleProduct(id)
                this.product = res
                console.log(res);
            } catch (error) {
                console.error(error)
            }
        }
    }
})