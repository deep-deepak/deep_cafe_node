import React from 'react'

function Dinner() {
    return (
        <div>
            <section className="break_fast">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="sixth">popular <span className="section_heading">Dinner</span></h1>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/dinner1.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Kolkata Biryani</h5>
                                        <h6 className="price">₹270/- </h6>
                                        <p>
                                            <i className="bi bi-share-fill"></i>
                                            <i className="bi bi-heart-fill"></i>
                                            <i className="bi bi-eye-fill"></i>
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-success">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/dinner2.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Kadhayi Chicken</h5>
                                        <h6 className="price">₹380/- </h6>
                                        <p>
                                            <i className="bi bi-share-fill"></i>
                                            <i className="bi bi-heart-fill"></i>
                                            <i className="bi bi-eye-fill"></i>
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-success">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/dinner3.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Special Thali</h5>
                                        <h6 className="price">₹120/- </h6>
                                        <p>
                                            <i className="bi bi-share-fill"></i>
                                            <i className="bi bi-heart-fill"></i>
                                            <i className="bi bi-eye-fill"></i>
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-success">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/dinner4.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Amritsari Naan & Chhole</h5>
                                        <h6 className="price">₹160/- </h6>
                                        <p>
                                            <i className="bi bi-share-fill"></i>
                                            <i className="bi bi-heart-fill"></i>
                                            <i className="bi bi-eye-fill"></i>
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-success">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dinner