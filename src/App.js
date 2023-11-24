import './App.css';
import useStore from './store/store';
import cartStore from './store/cartstore';
import { useEffect, useState } from 'react';
import Product from './models/productModel';
import ProductItem from './components/productItem';

function App() {
  const products = useStore((state) => state.productData);
  const getProducts = useStore((state) => state.getProductData);
  const cart = cartStore((state) => state.cartData)
  const sendToCart = cartStore((state) => state.addToCart);
  const [showAlert, setAlert] = useState(false);
  const error = useStore((state) => state.error); // Get error from store

  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);

  const sendProductToCart = (product) => {
    sendToCart(product);
    console.log(product);
    console.log(cart);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);

  };

  let alert = <div></div>;

  if (showAlert === true) {
    alert = <div class="alert alert-info alert-dismissible" role="alert">
      {JSON.stringify(cart)}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  }

  let productContent = products.map((product) =>{
    return <ProductItem product={product}></ProductItem>
  });

  return (
    <div className="App">
       {/* {JSON.stringify(products)} */}
       {productContent}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item">
                <i class="bi bi-bag-fill" onClick={() => sendProductToCart(products[0])}></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {alert}
    </div>
  );
}

export default App;