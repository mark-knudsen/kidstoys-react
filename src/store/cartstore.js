import { create } from 'zustand';
import { produce } from "immer"; // to be able to push object to array

const cartStore = create((set) => ({
    cartData: [{
        "id": 1,
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    },
    {
        "id": 1,
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    },
    {
        "id": 1,
        "name": "Hotweels hotrod",
        "description": "It's so cool",
        "price": 6,
        "categoryId": 4,
        "quantity": 100
    }],
    addToCart: (product) => {
        set(produce((state) => {
            state.cartData.push(product); 
        }));
    },
    removeFromCart: (product) => {
        set(produce((state) => {
            const index = state.cartDate.indexOf(product.id);
            state.cartData = state.cartData.splice(index, 1);
        }));
    },
    clearCart: () =>{
        set(() => ({ cartData: [] }));
    }
}));

export default cartStore;