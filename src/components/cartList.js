import '../App.css';
import useStore from '../store/store';
import CartItem from './cartItem';

function CartList({cart}) { 

    let productContent = <div>Your Cart Is Empty</div>;

    if(cart.length != 0){
        productContent = cart.map((product, id) =>{
        return <CartItem product={product} key={id}></CartItem>
        });
    }

    return (
        <div className='biggerMarginT'>
            {productContent}
        </div>
    );
}

export default CartList;