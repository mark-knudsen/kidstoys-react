import '../App.css';
import useStore from '../store/store.js';
import { useEffect } from 'react';
import Loading from '../components/loading.js';
import ProductItem from '../components/productItem.js';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams();
  const product = useStore((state) => state.singleProduct);
  const getProduct = useStore((state) => state.getProductDataById);

  useEffect(() => {
    getProduct(params.id);
  }, []);

  return (
    <div className="App">
      <Loading></Loading>
      <ProductItem product={product}></ProductItem>
    </div>
  );
}

export default ProductPage;