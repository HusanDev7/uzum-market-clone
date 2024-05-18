import axiosClient from './axiosClient.js'

const apiProduct = {
    getProduct(skip, limit) {
        const url = `/products/?skip=${skip}&limit=${limit}`;
        return axiosClient.get(url);
    },
    getSearch(keyword) {
        const url = `/products/search?q=${keyword}`
        return axiosClient.get(url)
    }
}

export default apiProduct