import '../App.css';
import useStore from '../store/store';
import ProductItem from './productItem';

function ProductList({products}) { 
    const productFilter = useStore((state) => state.productFilter);
    const categoryFilter = useStore((state) => state.categoryFilter);

    let productContent = products.filter(product => product.name.toLowerCase().includes(productFilter) || productFilter === "").map((product, id) =>{
    return <ProductItem product={product} key={id}></ProductItem>
    });
    // let productContent2 = products.filter(product => product.category.toLowerCase().includes(categoryFilter) || categoryFilter === "").map((product, id) =>{
    // return <ProductItem product={product} key={id}></ProductItem>
    // });

    return (
        <div className='productList'>
            <h1>product list</h1>
            {productContent}   
        </div>
    );
}

export default ProductList;