import '../App.css';
import useStore from '../store/store.js';
import cartStore from '../store/cartstore.js';
import { useEffect, useState } from 'react';
import ProductList from '../components/productList.js';
import Loading from '../components/loading.js';
import { useParams } from 'react-router-dom';
 
function ProductPage() {

    const params = useParams();


    const products = useStore((state) => state.productData);
    const getProducts = useStore((state) => state.getProductData);

    const sendToCart = cartStore((state) => state.addToCart);

    const [product, setProduct] = useState(Object);
  
    useEffect(() => {
        getThings();
        //setProduct(products.filter(x => x.id = params.id));
        //setProduct(products[0]);
        console.log(product);
    }, []);
    
    const getThings = async () =>{
        getProducts().then(console.log(products));
     //   console.log(products);

    }
    
    const sendProductToCart = (product) => {
      sendToCart(product);
      // console.log(product);
      // console.log(cart);
    //   setAlert(true);
    //   setTimeout(() => {
    //   }, 1000);
  
    };
   
    return (
        <div className="App">
 
          <div className='py-3'>
            <div className='contanier'>
              <div className='row'>
 
                <div className="col-md-4 border-end">
                  <img src={require("../images/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg")}/>
                </div>

                {product.name}
 
                {/* <div className="col-md-8">
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
                </div> */}
 
 
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default ProductPage;