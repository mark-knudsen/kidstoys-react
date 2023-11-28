import './App.css';
import FrontPage from './pages/FrontPage.js';
import CartPage from './pages/CartPage.js';
import ProductPage from './pages/ProductPage.js';
import ProductsPage from './pages/ProductsPage.js';
import { useNavigate } from  "react-router-dom";
import { Route, Routes } from 'react-router-dom';

function App() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  return (
    <div className="App">
    
    <div class="hidden sm:ml-6 sm:block">
      <div class="flex space-x-4">
        <button class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("kidstoys")}>Front Page</button>
        <button class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("kidstoys/products")}>products Page</button>
        <button class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("kidstoys/product")}>Product Page</button>
        <button class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("kidstoys/cart")}>Cart</button>
      </div>
    </div>

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