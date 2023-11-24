import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
    productData: [],
    categoriesData: [],
    error: null, // Add an error property to store potential errors
    getProductData: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            set((state) => ({
                productData: (state.productData = response.data.products), // really anoying that it wants to name the array 
                error: null
            }));

        } catch (error) {
            console.error('Error fetching products:', error);
            set({ error: error.message });
        }
    },
    getCategoriesData: async () => {
        const response = await axios.get('http://localhost:8000/api/categories');
        set((state) => ({
            categoriesData: (state.categoriesData = response.data)
        }))
    },

}));

export default useStore;