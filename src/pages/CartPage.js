import '../App.css';
import { useNavigate } from "react-router-dom";
import cartStore from '../store/cartstore.js';
import CartList from "../components/cartList.js";

function CartPage() {
    const cart = cartStore((state) => state.cartData);
    const clearCart = cartStore((state) => state.clearCart);
    const removeProduct = cartStore((state) => state.removeProduct);

    //
    //https://stackoverflow.com/questions/42201031/some-files-js-css-images-arent-loading-after-refreshing-the-page-in-react-j

    let navigate = useNavigate();
    const routeChange = () => {
        let path;
        navigate(path);
    }

    const subTotal = () => {
        let subTotal = 0;
        cart.forEach(element => {
            subTotal += element.price;
        });
        return subTotal;
    }

    let cartListContent = <CartList cart={cart}></CartList>

    return (
        <div>
            <div className="container">
                <div className="card mb-3 cartItem cartCheckoutDiv">
                    <div className="row">
                        <div className="col-6">
                            <p className="card-text mt-5">Quantity:</p>
                            <p className="card-text mt-5">Subtotal:</p>
                        </div>
                        <div className="col-6 text-start">
                            
                            <p className='card-text mt-5'>{cart.length}</p>
                            <p className='card-text mt-5'>{subTotal()} $</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 mt-5">
                            <button type="button" className="btn btn-primary" onClick={() => navigate("../kidstoys/products")}>Continue Shopping</button>
                            <button type="button" className="btn btn-danger" onClick={() => clearCart()}>Checkout</button>
                        </div>
                  
                    </div>


                </div>
            </div>
            {cartListContent}
        </div>
    );
}

export default CartPage;