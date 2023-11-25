import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
    loading: false,
    hasErrors: false,
    errorMessage: "no error",

    productData: [],
    productFilter: "",
    categoryData: [],
    categoryFilter: "",

    getProductData: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            set((state) => ({
                productData: (state.productData = response.data.products), // really anoying that it wants to name the array 
                loading: false
                }));
            } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message}));
          }
    },
    setProductFilter: (value) =>{
        set(() => ({ productFilter: value }));
    },

    getCategoryData: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/categories');
            set((state) => ({
                categoryData: (state.categoryData = response.data.categories)
                }));
            } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message}));
        }
    },
    setCategoryFilter: (value) =>{
        set(() => ({ categoryFilter: value }));
    },

}));

export default useStore;