import '../App.css';
import useStore from '../store/store';
import CartItem from './cartItem';

function CartList({cart}) { 
    let productContent = cart.map((product, id) =>{
    return <CartItem product={product} key={id}></CartItem>
    });

    return (
        <div>
            <h1>Shopping Cart</h1>
            {productContent}
        </div>
    );
}

export default CartList;