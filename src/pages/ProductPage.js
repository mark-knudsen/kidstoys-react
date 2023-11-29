import '../App.css';
import useStore from '../store/store.js';
import cartStore from '../store/cartstore.js';
import { useEffect, useState } from 'react';
import Loading from '../components/loading.js';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams();

  const product = useStore((state) => state.singleProduct);
  const getProduct = useStore((state) => state.getProductDataById);
  const sendToCart = cartStore((state) => state.addToCart);
  const [showAlert, setAlert] = useState(false);

  useEffect(() => {
    getProduct(params.id);
  }, []);

  const sendProductToCart = (productItem) => {
    sendToCart(productItem);

    setAlert(true);
    setTimeout(() => {
      setAlert(false)
    }, 1000);
  };

    let alert = <div></div>;
  
    if (showAlert === true) {
      alert = <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    }
   
    return (
        <div className="App">
            <Loading></Loading>
            {alert}
          <div className='py-3'>
            <div className='contanier'>
              <div className='row'>
         
                 <div className="col-md-4 border-end">
                  <img src={require("../images/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg")}/>
                </div>
 
                <div className="col-md-8">
                  <h6>
                    {product.name}
                  </h6>
                  <h4 className="mb-1"> {product.price} KR</h4>
                  <p>{product.description}</p>
 
                  <div className="row">
                    <div className="col-md-3 mt-3">
                      <div className="input-group">
                        <button type="button" className="input-group-text">-</button>
                        <input type="text" className="form-control text-center" value="1"/>
                        <button type="button" className="input-group-text">+</button>
                      </div>
                    </div>
                    <div className='col-md-3 mt-3'>
                      <button type="button" className="btn btn-primary w-100">Add To Cart</button>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProductPage;