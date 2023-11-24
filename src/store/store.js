import { create } from 'zustand';
import axios from 'axios';
import Product from '../models/productModel';

const useStore = create(set => ({
    productData: [],
    categoriesData: [],
    error: null, // Add an error property to store potential errors
    getProductData: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            set(() => ({

                productData: response.data.products.map(),

                error: null
            }));

            console.log('Fetched products:', JSON.stringify(this.productData));
        } catch (error) {
            console.error('Error fetching products:', error);
            set({ error: error.message });
        }
    },
    /* getProductData: async () => {
        const response = await axios.get('http://localhost:8000/api/products');
        set((state) => ({
            productData: (state.productData = response.data)
        }))
    }, */
    getCategoriesData: async () => {
        const response = await axios.get('http://localhost:8000/api/categories');
        set((state) => ({
            categoriesData: (state.categoriesData = response.data)
        }))
    },

}));

export default useStore;