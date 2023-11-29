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
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-color">
        <div className="container-fluid">
          <img src="./kidstoys-logo.png" className="navbar-brand" onClick={() => navigate("kidstoys")} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex nav-search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => navigate("kidstoys")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onNameClick={() => navigate("kidstoys/products")}>Products</a>
              </li>
              {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
            </ul>
            <i className="bi bi-cart3" onClick={() => navigate("kidstoys/cart")}></i>
          </div>
        </div>
      </nav>

      <header className="App-header">
        <Routes>
          <Route path="kidstoys" element={<FrontPage></FrontPage>}></Route>
          <Route path="kidstoys/cart" element={<CartPage></CartPage>}></Route>
          <Route path="kidstoys/product/:id" element={<ProductPage></ProductPage>}></Route>
          <Route path="kidstoys/products" element={<ProductsPage></ProductsPage>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;