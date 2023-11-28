import '../App.css';
import useStore from '../store/store';

function FrontPage() {

    return (
        <div class="container">
            <div class="carousel-container text-center">
                <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../images/test/test-new-1.jpg" class="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                        <div class="carousel-item">
                            <img src="../images/test/test-new-2.jpg" class="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                        <div class="carousel-item">
                            <img src="../images/test/test-new-3.jpg" class="d-block w-100 img-fluid" alt="..."></img>

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>
                <h1>Recent added products</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                <div className="col">
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
                </div>
            </div>


        </div>

    );
}

export default FrontPage;