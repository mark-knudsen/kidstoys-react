import '../App.css';
import useStore from '../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FrontPage() {
    const getThreeProducts = useStore(state => state.getThreeNewestProducts);
    const frontpageProducts = useStore(state => state.frontpageProducts);

    useEffect(() => {
        getThreeProducts();
        
    }, []);

    let navigate = useNavigate();
    const routeChange = () => {
        let path;
        navigate(path);
    }

    let productContent = frontpageProducts.map((product, id) => {
        return <div className="col" key={id}>
            <div className="card card-style d-flex justify-content-center align-items-center">
                <img src={process.env.PUBLIC_URL + "/images/test/" + ((product.imagePath != null) ? product.imagePath.toLowerCase() : "none") + ".jpg"} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <a onClick={() => navigate("product/" + product.id)} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    })

    return (
        <div className="container">
            <br />
            <div className="carousel-container text-center">
                <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + "../images/test/test-new-1.jpg"} className="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + "../images/test/test-new-2.jpg"}  className="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + "../images/test/test-new-3.jpg"}  className="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>
                <br />
                <h1>Recent added products</h1>
                <br />
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {productContent}
                {/*   <div className="col">
                    <div className="card card-style d-flex justify-content-center align-items-center">
                        <img src="../images/test/test-1.jpg" className="card-img-top img-fluid" alt="..."></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Kids toy 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-style d-flex justify-content-center align-items-center">
                        <img src="../images/test/test-2.jpg" className="card-img-top img-fluid" alt="..."></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Kids toy 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-style d-flex justify-content-center align-items-center">
                        <img src="../images/test/test-3.jpg" className="card-img-top img-fluid" alt="..."></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Kids toy 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div> */}

            </div>
            <br /><br />
        </div>
    );
}

export default FrontPage;