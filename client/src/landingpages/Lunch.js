import React from 'react'

export default function Lunch() {
    return (
        <div>
            <section className="break_fast">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="sixth">popular <span className="section_heading">Lunch</span></h1>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/lunch1.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Matar Pulao</h5>
                                        <h6 className="price">₹240/- </h6>
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
                                <img className="card-img-top" src="images/lunch2.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Shahi Paneer</h5>
                                        <h6 className="price">₹320/- </h6>
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
                                <img className="card-img-top" src="images/lunch3.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Dum Aloo</h5>
                                        <h6 className="price">₹150/- </h6>
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
                                <img className="card-img-top" src="images/lunch.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Dal Tadka</h5>
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
