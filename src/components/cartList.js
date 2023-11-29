import '../App.css';
import useStore from '../store/store';
import CartItem from './cartItem';

function CartList({cart}) { 

    let productContent = <div>Your Cart Is Empty</div>;

    if(cart.length != 0){
        const yo = [...new Set(cart)];
        productContent = cart.filter((q, id) => cart.indexOf(q) === id);
        console.log("hi");
        console.log(yo);
        // let carto = cart.map((product, id) =>{
        // return <CartItem product={product} key={id}></CartItem>
        // });
        // productContent = [...new Set(cart)].map((product) =>{ // new Set only get's list of uniqe items, quite nice
        //     return <CartItem product={product}></CartItem>
        //   });
    }

    return (
        <div className='biggerMarginT'>
            {/* {productContent} */}
        </div>
    );
}

export default CartList;