import '../App.css';
import useStore from '../store/store';

function CartItem({product}) { 
    return (
        <div>
            <div className="container">
                <div className="card mb-3 cartItem">
                    <div className="row">
                        <div className="col-3">    
                            <div className="col-md-4">
                                <img className='rounded' src={require("../images/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg")} />
                            </div>
                        </div>
                        <div className="col-6 text-start biggerMarginT">
                            <h1 className="card-title">{product.name}</h1>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="col-1 text-start biggerMarginT">
                            <p className='card-text'>
                                quat:
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
                                {product.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;