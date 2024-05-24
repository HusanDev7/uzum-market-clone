import apiProduct from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: null
    }),

    actions: {
        async getProduct(skip = 0, limit = 100) {
            try {
                const res = await apiProduct.getProduct(skip, limit)
                this.products = res.products
                // console.log(res);    
            } catch (error) {
                console.error(error)
            }
        }
    }
})