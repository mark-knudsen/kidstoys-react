import './App.css';
import FrontPage from './pages/FrontPage.js';
import CartPage from './pages/CartPage.js';
import ProductPage from './pages/ProductPage.js';
import ProductsPage from './pages/ProductsPage.js';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path;
    navigate(path);
  }

  return (
    <div className="App">
      <nav class="navbar sticky-top navbar-expand-lg navbar-light navbar-color">
        <div class="container-fluid">
          <img src="./kidstoys-logo.png" class="navbar-brand" href="/kidstoys/" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex nav-search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/kidstoys">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/kidstoys/products">Products</a>
              </li>
              {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
            </ul>
            <i class="bi bi-cart3"></i>
          </div>
        </div>
      </nav>


      {/* 
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("kidstoys")}>Front Page</button>
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("kidstoys/products")}>products Page</button>
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("kidstoys/product")}>Product Page</button>
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("kidstoys/cart")}>Cart</button>
        </div>
      </div> 
      */}

      <header className="App-header">
        <Routes>
          <Route path="kidstoys/" element={<FrontPage></FrontPage>}></Route>
          <Route path="kidstoys/cart" element={<CartPage></CartPage>}></Route>
          <Route path="kidstoys/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="kidstoys/products" element={<ProductsPage></ProductsPage>}></Route>
        </Routes>
      </header>
    </div>

  );
}

export default App;