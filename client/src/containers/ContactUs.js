import React from 'react'

export default function ContactUs() {
    return (
        <div>
            <section>
                <div className='image-background'>
                    <div className='container h-100'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-12 text-center'>
                                <h1 className='display-2'>Contact Us </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="contact-info">
                                <div className="address mt-4">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <h4 className="mb-2">Location:</h4>
                                    <p>160055 Mohali, chandigarh</p>
                                </div>
                                <div className="open-hours mt-4">
                                    <i className="bi bi-clock"></i>
                                    <h4 className="mb-2">Open Hours:</h4>
                                    <p>
                                        Sunday-Friday:<br />
                                        11:00 AM - 2300 PM
                                    </p>
                                </div>
                                <div className="email mt-4">
                                    <i className="bi bi-envelope-fill"></i>
                                    <h4 className="mb-2">Email:</h4>
                                    <p>deepcafe@info.com</p>
                                </div>
                                <div className="phone mt-4">
                                    <i className="bi bi-telephone-fill"></i>
                                    <h4 className="mb-2">Call:</h4>
                                    <p>+91- 00000-00000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control"
                                            placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
