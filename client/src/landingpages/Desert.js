import React from 'react'

export default function Desert() {
    return (
        <div>
            <section className="break_fast">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h1 className="sixth">Popular <span className="section_heading">Desserts</span> </h1>
                        </div>
                        <div className="col-md-3">
                            <div className="wrapper">
                                <div className="imageContainer">
                                    <img src="images/miffim.avif" alt="" />
                                    <span>cherry muffin</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="wrapper">
                                <div className="imageContainer">
                                    <img src="images/rosemuffin.avif" alt="" />
                                    <span>rose muffin</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="wrapper">
                                <div className="imageContainer">
                                    <img src="images/sweetdonut.avif" alt="" />
                                    <span>sweet donut</span>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="wrapper">
                                <div className="imageContainer">
                                    <img src="images/chockocake.avif" alt="" />
                                    <span>choco cake</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
