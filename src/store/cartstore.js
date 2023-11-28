import { create } from 'zustand';
import { produce } from "immer"; // to be able to push object to array

const cartStore = create((set) => ({
    cartData: [{
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    },
    {
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    },
    {
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    }],
    addToCart: (product) => {
        set(produce((state) => {
            state.cartData.push(product); 
        }))
    }   
}));

export default cartStore;