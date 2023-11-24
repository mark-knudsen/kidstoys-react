import { create } from 'zustand';
import { produce } from "immer"; // to be able to push object to array

const cartStore = create((set) => ({
    cartData: [],
    addToCart: (product) => {
        set(produce((state) => {
            state.cartData.push(product); 
        }))
    }   
}));

export default cartStore;