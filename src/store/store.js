import { create } from 'zustand';
import axios from 'axios';

const laravelAPI = "http://localhost:8000/api/";
const wordpressAPI = "http://localhost/kidstoysWP_API/wp-json/toys/v2/";
const usedAPI = laravelAPI;

const useStore = create((set, get) => ({
    loading: false,
    hasErrors: false,
    errorMessage: "no error",

    frontpageProducts: [],
    singleProduct: [],
    productData: [],
    productFilter: "",
    categoryData: [],
    categoryFilter: "",

    getProductData: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(usedAPI + 'products');
            set((state) => ({
                productData: (state.productData = response.data.products), // IMPORTANT, remove .products when using WordPress 
                loading: false
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message }));
        }
    },
    getProductDataById: async (id) => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(usedAPI + 'products/' + id);
            set((state) => ({
                singleProduct: (state.singleProduct = response.data.product), // really anoying that it wants to name the array 
                loading: false
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message }));
        }
    },
    getThreeNewestProducts: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(usedAPI + 'products');
            const sortedProducts = response.data.products.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            const newestProducts = sortedProducts.slice(0, 3);
            set((state) => ({ 
                frontpageProducts: (state.frontpageProducts = newestProducts)
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message }));
        }
    },
    setProductFilter: (value) => {
        set(() => ({ productFilter: value.toLowerCase() }));
    },

    getCategoryData: async () => {
        try {
            const response = await axios.get(usedAPI + 'categories');
            set((state) => ({
                categoryData: (state.categoryData = response.data.categories)
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message }));
        }
    },
    setCategoryFilter: (value) => {
        console.log("Set cat with" + value);
        set(() => ({ categoryFilter: value }));
    },
}));

export default useStore;