import { create } from 'zustand';
import Product from '../models/productModel';

const cartStore = create(set => ({
    cartData: [],
    addToCart: (product = Product) => {
        set((state) => ({
            cartData: (state.cartData += product)
        }))
    }   

}));

export default cartStore;