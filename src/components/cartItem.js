import '../App.css';
import cartStore from '../store/cartstore';
import { useState, useEffect } from 'react';

function CartItem({ product }) {
    const cart = cartStore((state) => state.cartData);
    const [quantity, setQuantity] = useState(0);

    //console.log(quantity);

    const getQuantity = () => { // alot of code just for quantity, would be nice if you could just send it as props, but seems devilish difficult
        let quantity = 0;
        cart.forEach(element => {
            if (element.id === product.id) quantity++;
        });
        setQuantity(quantity);
    }

    useEffect(() => {
        getQuantity();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card mb-3 cartItem">
                    <div className="row">
                        <div className="col-3">
                            <div className="col-md-4">
                                <img className='rounded' src={process.env.PUBLIC_URL + "/images/kidstoys/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg"} />
                            </div>
                        </div>
                        <div className="col-6 text-start biggerMarginT">
                            <h1 className="card-title">{product.name}</h1>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="col-1 text-start biggerMarginT">
                            <p className='card-text'>
                                qut:
                            </p>
                            <p className='card-text'>
                                total:
                            </p>
                        </div>
                        <div className="col-1 text-start biggerMarginT">
                            <p className='card-text'>
                                {product.price}
                            </p>
                            <p className='card-text'>
                                {product.price * quantity}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;