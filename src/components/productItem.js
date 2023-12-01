import '../App.css';
import cartStore from '../store/cartstore.js';
import { useState } from 'react';
import Popup from "./popup";
import { useNavigate } from 'react-router-dom';

function ProductItem({ product }) {
    const sendToCart = cartStore((state) => state.addToCart);
    const [openPopover, setOpenPopover] = useState(false);

    let pop = <Popup openPopover={openPopover} setOpenPopover={setOpenPopover}></Popup>

    const sendProductToCart = () => {
        sendToCart(product);
        setOpenPopover(true);
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path;
        navigate(path);
    }
    return (
        <div className="card mb-3 product-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL + "/images/kidstoys/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg"} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-5">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">
                            <small className="text-muted">Price:{product.price}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Amounts:{product.quantity}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted"></small>
                        </p>
                        <div className='col-md-3 mt-3 see-more'>
                            <button type="button" className="btn btn-primary w-100" onClick={() => sendProductToCart()}>Add To Cart</button>
                            <button type="button" className="btn btn-primary w-100" onClick={() => navigate("../kidstoys/product/" + product.id)}>See more</button>

                        </div>
                        
                    </div>
                </div>
            </div>
            {pop}
        </div>
    );
}

export default ProductItem;