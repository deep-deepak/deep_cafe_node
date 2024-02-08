import React from 'react'

export default function BreakFast() {
    return (
        <div>
            <section className="break_fast">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="sixth">popular <span className="section_heading">Break fast </span></h1>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src="images/breakfast1.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Poha</h5>
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
                                <img className="card-img-top" src="images/breakfast2.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Gobi ka Paratha</h5>
                                        <h6 className="price">₹40/- </h6>
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
                                <img className="card-img-top" src="images/breakfast3.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Chhole Bhature</h5>
                                        <h6 className="price">₹90/- </h6>
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
                                <img className="card-img-top" src="images/breakfast4.avif" alt="Card image cap" />
                                <div className="card-body">
                                    <div className="title_icon">
                                        <h5 className="card-title">Uttapam</h5>
                                        <h6 className="price">₹70/- </h6>
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
