import '../App.css';

function ProductItem({product}) {
    return (
        <div className='border-2 border-black rounded-md imageZoom'>
            {/* {<img className='object-contain rounded-md h-96 w-170' src={product.imagePath}></img>} */}
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price} </p>
            <p>{product.quantity}</p>
        </div>
    );
}

export default ProductItem;