import { create } from 'zustand';
import axios from 'axios';

const laravelAPI = "http://localhost:8000/api/";
const wordpressAPI = "http://localhost/kidstoysWP_API/wp-json/toys/v2/";
const usedAPI = laravelAPI;

const useStore = create((set, get) => ({
    loading: false,
    hasErrors: false,
    errorMessage: "no error",

    singleProduct: [],
    productData: [],
    productFilter: "",
    categoryData: [],
    categoryFilter: "",
    frontpageProducts: [],

    getProductData: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(usedAPI + 'products');
            set((state) => ({
                productData: (state.productData = response.data.products), // really anoying that it wants to name the array 
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
        finally {
            console.log("get product by id");
            console.log(get.singleProduct);
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
    getThreeNewestProducts: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(usedAPI + 'products');
            const threeProducts = response.data.products.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            console.log(JSON.stringify(threeProducts));
            const newProducts = threeProducts.slice(0, 3);
            set((state) => ({ 
                frontpageProducts: (state.frontpageProducts = newProducts)
            }));

        } catch (err) {
            set(() => ({ hasErrors: true, loading: false, errorMessage: err.message }));
        }

    },

}));

export default useStore;