import './App.css';
import useStore from './store/store';
import cartStore from './store/cartstore';
import { useEffect, useState } from 'react';
import Product from './models/productModel';

function App() {
  const products = useStore((state) => state.productData);
  const getProducts = useStore((state) => state.getProductData);
  const cart = cartStore((state) => state.cartData)
  const sendToCart = cartStore((state) => state.addToCart);
  const [showAlert, setAlert] = useState(false);
  const error = useStore((state) => state.error); // Get error from store

  let productOne = [];
  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      // Additional data fetching can be added here if needed
    };

    fetchData();
    console.log(products)
  }, [getProducts]);



  const sendProductToCart = (product) => {
    //const productData = JSON.parse(product);
    sendToCart(product);
    console.log(productOne);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 10000);

  };



  let alert = <div></div>;

  if (showAlert === true) {
    alert = <div class="alert alert-info alert-dismissible" role="alert">
      {JSON.stringify(cart)}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  }


  return (
    <div className="App">
       {JSON.stringify(products)}


      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item">
                <i class="bi bi-bag-fill" onClick={() => sendProductToCart(products.products[0])}></i>
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
