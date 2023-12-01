import '../App.css';

function ProductItem({ product }) {
    return (<div class="card mb-3 product-card">
        <div class="row g-0">
            <div class="col-md-4">
                <img src={process.env.PUBLIC_URL + "/images/test/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg"} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text">

                        <small class="text-muted">Price:{product.price}</small>
                    </p>
                    <p class="card-text">
                        <small class="text-muted">Amounts:{product.quantity}</small>
                    </p>
                    <p class="card-text">
                        <small class="text-muted"></small>
                    </p>
                </div>
            </div>
        </div>
    </div>



    );
}

export default ProductItem;