import '../App.css';
import useStore from '../store/store';
import ProductItem from './productItem';

function ProductList({products}) { 
    const productFilter = useStore((state) => state.productFilter);

    let productContent = products.filter(product => product.name.includes(productFilter) || productFilter === "").map((product, id) =>{
    return <ProductItem product={product} key={id}></ProductItem>
    });

    return (
        <div>
            <h1> product list</h1>
            {productContent}
        </div>
    );
}

export default ProductList;