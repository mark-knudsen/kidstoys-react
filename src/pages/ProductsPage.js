import '../App.css';
import useStore from '../store/store.js';
import cartStore from '../store/cartstore.js';
import { useEffect, useState } from 'react';
import ProductList from '../components/productList.js';
import Loading from '../components/loading.js';

function ProductsPage() { 

    const products = useStore((state) => state.productData);
    const getProducts = useStore((state) => state.getProductData);
    const productFilter = useStore((state) => state.productFilter);
    const setProductFilter = useStore((state) => state.setProductFilter);
    const cart = cartStore((state) => state.cartData)
    const sendToCart = cartStore((state) => state.addToCart);
    const [showAlert, setAlert] = useState(false);
    const categories = useStore((state) => state.categoryData);
    const getCategories = useStore((state) => state.getCategoryData);
    const categoryFilter = useStore((state) => state.categoryFilter);
    const setCategoryFilter = useStore((state) => state.setCategoryFilter);
  
    useEffect(() => {
      getProducts();
      getCategories(); 
      // console.log(products)
      // need to have a select thing to show categories, then when selected you will filter products by the selected category
    }, []);
  
    const sendProductToCart = (product) => {
      sendToCart(product);
      // console.log(product);
      // console.log(cart);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1000);
  
    };
  
    let alert = <div></div>;
  
    if (showAlert === true) {
      alert = <div className="alert alert-info alert-dismissible" role="alert">
        {JSON.stringify(cart)}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    }
  
    let productListContent = <ProductList products={products}></ProductList>
  
    let categoryOptions = (categories.map((category, id) =>{
      return <option value={category} onClick={() => setCategoryFilter(category)} key={id}> {category.name}</option>
      }));
  
      let categoryList = <select>{categoryOptions}</select>

    return (
        <div className="App">
           {/* {JSON.stringify(products)} */}
           {/* {JSON.stringify(categories)} */}

           <input className='Search' placeholder='Search' onChange={(e)=> setProductFilter(e.target.value)} value={productFilter} autoFocus></input>
           {categoryList}
           {productListContent}
          {alert}
          <Loading></Loading>
        </div>
    );
}

export default ProductsPage;