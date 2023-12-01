import '../App.css';
import CartItem from './cartItem';

function CartList({cart}) { 
    let productContent = <div>Your Cart Is Empty</div>;

    if(cart.length != 0){
        // how would you send the amount of times a product with the same id occurs to the cartItem in this scenario?
        productContent = [...new Map(cart.map(item => [item["id"], item])).values()].map((product, id) =>{
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