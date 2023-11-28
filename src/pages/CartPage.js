import '../App.css';
import cartStore from '../store/cartstore.js';
import CartList from "../components/cartList.js";

function CartPage() { 
    const cart = cartStore((state) => state.cartData);

    let cartListContent = <CartList cart={cart}></CartList>

    return (
        <div>
            {cartListContent}
        </div>
    );
}

export default CartPage;