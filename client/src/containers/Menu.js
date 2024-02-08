import React from 'react'

export default function Menu() {
    return (
        <div>
            <section>
                <div className='image-background'>
                    <div className='container h-100'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-12 text-center'>
                                <h1 className='display-2'>Our Menu</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our_menu" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <ul className="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast"
                                    role="tab">Breakfast</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Lunch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab">Dinner</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="tab-content col-lg-12" id="myTabContent">
                            <div className="tab-pane fade show active" id="breakfast" role="tabpanel"
                                aria-labelledby="breakfast-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/breakfast1.avif" alt="burger" />
                                            <div className="menu_content">
                                                <h4>Poha<span>₹ 120/-</span></h4>
                                                <p>Poha, also known as pauwa, sira, chira, aval or avalakki-in Kannada language,
                                                    among many other names.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/breakfast2.avif" alt="black coffee" />
                                            <div className="menu_content">
                                                <h4>Gobi ka Paratha <span>₹ 40/-</span></h4>
                                                <p>Gobi paratha is a type of paratha or, originating from the Indian
                                                    subcontinent,that is stuffed with.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/breakfast3.avif" alt="fried rice" />
                                            <div className="menu_content">
                                                <h4>Chhole Bhature <span>₹ 90/-</span></h4>
                                                <p>Chole bhature is a food dish popular in the Northern areas of the Indian
                                                    subcontinent. </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/breakfast4.avif" alt="burger" />
                                            <div className="menu_content">
                                                <h4>Uttapam <span>₹ 70/-</span></h4>
                                                <p>An uttapam is a type of dosa from South India. Unlike a typical dosa, which
                                                    is crisp.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/breakfast5.avif" alt="black coffee" />
                                            <div className="menu_content">
                                                <h4>Oats <span>₹ 120/-</span></h4>
                                                <p>The oat, sometimes called the common oat, is a species of cereal grain grown
                                                    for its seed, which is known by the same.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/breakfast6.avif" alt="fried rice" />
                                            <div className="menu_content">
                                                <h4>Upma <span>₹ 80/-</span></h4>
                                                <p>Upma, uppumavu, or uppittu is a dish originating from the Indian
                                                    subcontinent, most common in Kerala, Andhra Pradesh, .</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/piza.avif" alt="pizza" />
                                            <div className="menu_content">
                                                <h4>12" Pizza <span>₹ 135/-</span></h4>
                                                <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of
                                                    leavened wheat-based dough topped.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/salad.avif" alt="salad" />
                                            <div className="menu_content">
                                                <h4>Salad <span>₹ 120/-</span></h4>
                                                <p>A salad is a dish consisting of mixed, mostly natural ingredients. They are
                                                    typically served at room temperature.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/green.avif" alt="green tea" />
                                            <div className="menu_content">
                                                <h4>green tea <span>₹ 115/-</span></h4>
                                                <p>Green tea is a type of tea that is made from Camellia sinensis leaves and
                                                    buds that have not undergone the same.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/burger.avif" alt="burger" />
                                            <div className="menu_content">
                                                <h4>Chicken Burger <span>₹ 124/-</span></h4>
                                                <p>A chicken sandwich is a sandwich that typically consists of boneless,
                                                    skinless chicken breast or thigh served.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/coffe.avif" alt="black coffee" />
                                            <div className="menu_content">
                                                <h4>Black coffee <span>₹ 120/-</span></h4>
                                                <p>Black coffee may reduce your risk of cancer, liver cirrhosis, and type 2
                                                    diabetes.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/fried.avif" alt="fried rice" />
                                            <div className="menu_content">
                                                <h4>Fried Rice <span>₹ 145/-</span></h4>
                                                <p>Fried rice is a dish of cooked rice that has been stir-fried in a wok or a
                                                    frying pan such as eggs, vegetables, seafood.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/veg.avif" alt="burger" />
                                            <div className="menu_content">
                                                <h4>Veg Pulav<span>₹ 160/-</span></h4>
                                                <p>Pilaf or pilau is a rice dish, or in some regions, a wheat dish, whose recipe
                                                    usually involves cooking in stock or broth.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/naan.avif" alt="black coffee" />
                                            <div className="menu_content">
                                                <h4>Plain Naan <span>₹ 20/-</span></h4>
                                                <p>naan is more nutrient-dense than pita or white bread. While it may contain
                                                    more carbs and sugars.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/sahi.avif" alt="fried rice" />
                                            <div className="menu_content">
                                                <h4>Shahi Korma <span>₹ 185/-</span></h4>
                                                <p>This super aromatic and delicious vegetable korma is made with potatoes,
                                                    peas, carrots, French beans, onions.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="single_menu">
                                            <img src="images/matar.avif" alt="burger" />
                                            <div className="menu_content">
                                                <h4>Matar Paneer <span>₹ 190/-</span></h4>
                                                <p>Mattar paneer, also known as matar paneer, muttar paneer, and mutter paneer,
                                                    is a modern restaurant-style.</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/misx.avif" alt="black coffee" />
                                            <div className="menu_content">
                                                <h4>Mix Veg <span>₹ 120/-</span></h4>
                                                <p>
                                                    Image result for mix veg what
                                                    Mixed vegetables refer to ready to use combination of cut vegetables..</p>
                                            </div>
                                        </div>
                                        <div className="single_menu">
                                            <img src="images/soya.avif" alt="fried rice" />
                                            <div className="menu_content">
                                                <h4>Soya Butter Mashala <span>₹ 145/-</span></h4>
                                                <p>ASoya Butter Masala is a simple but elegant dish without compromising on the taste from soy, tomatoes & cashew nut.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className=" menu_btn btn btn-danger">view more</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
