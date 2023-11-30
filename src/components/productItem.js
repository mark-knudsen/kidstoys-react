import '../App.css';

function ProductItem({ product }) {
    return (
        <div className='border-2 border-black rounded-md imageZoom'>
            <img src={process.env.PUBLIC_URL + "/images/test/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg"} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price} </p>
            <p>{product.quantity}</p>
        </div>
    );
}

export default ProductItem;