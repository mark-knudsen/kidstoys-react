import '../App.css';

function ProductItem({product}) {
    return (
        <div className='border-2 border-black rounded-md imageZoom'>
             <img src={require("../images/" + ((product.imagePath != null) ? product.imagePath : "None") + ".jpg")} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price} </p>
            <p>{product.quantity}</p>
        </div>
    );
}

export default ProductItem;