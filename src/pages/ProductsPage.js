import '../App.css';
import useStore from '../store/store.js';
import { useEffect } from 'react';
import ProductList from '../components/productList.js';
import Loading from '../components/loading.js';

function ProductsPage() { 

    const products = useStore((state) => state.productData);
    const getProducts = useStore((state) => state.getProductData);
    const productFilter = useStore((state) => state.productFilter);
    const setProductFilter = useStore((state) => state.setProductFilter);
    const categories = useStore((state) => state.categoryData);
    const getCategories = useStore((state) => state.getCategoryData);
    const categoryFilter = useStore((state) => state.categoryFilter);
    const setCategoryFilter = useStore((state) => state.setCategoryFilter);
  
    useEffect(() => {
      getProducts();
      getCategories(); 
    }, []);
  
    let productListContent = <ProductList className="productlist" products={products}></ProductList>
  
    let categoryOptions = (categories.map((category, id) =>{
      return <option value={category} onClick={() => setCategoryFilter(category)} key={id}> {category.name}</option>
      }));
    let categoryList = <select>{categoryOptions}</select> // can't be done in one go :/

    return (
        <div className="App">
           <input className='Search' placeholder='Search' onChange={(e) => setProductFilter(e.target.value)} value={productFilter} autoFocus></input>
           {categoryList}
           {productListContent}
          {alert}
          <Loading></Loading>
        </div>
    );
}

export default ProductsPage;