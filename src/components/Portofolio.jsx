import React, { Component } from 'react';

class Portofolio extends Component {
  render() {
    return (
        <React.Fragment>
            <main id="main">

                <section id="portfolio" className="section-bg">
                    <div className="container">

                        <header className="section-header">
                            <h3 className="section-title">Our Portfolio</h3>
                        </header>

                        <div className="row">
                            <div className="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">App 1</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/web3.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Web 3"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Web 3</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/app2.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="App 2"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">App 2</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/card2.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Card 2"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Card 2</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/web2.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Web 2"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Web 2</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/app3.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="App 3"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">App 3</a></h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/card1.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Card 1"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Card 1</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/card3.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Card 3"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Card 3</a></h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt=""></img>
                                        <a href="assets/img/portfolio/web1.jpg" className="link-preview venobox" data-gall="portfolioGallery" title="Web 1"><i className="ion ion-eye"></i></a>
                                        <a href="/#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                                    </figure>

                                    <div className="portfolio-info">
                                        <h4><a href="/#">Web 1</a></h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="clients" className="wow fadeInUp">
                    <div className="container">

                        <header className="section-header">
                            <h3>Our Clients</h3>
                        </header>

                        <div className="owl-carousel clients-carousel">
                            <img src="assets/img/clients/client-1.png" alt=""></img>
                            <img src="assets/img/clients/client-2.png" alt=""></img>
                            <img src="assets/img/clients/client-3.png" alt=""></img>
                            <img src="assets/img/clients/client-4.png" alt=""></img>
                            <img src="assets/img/clients/client-5.png" alt=""></img>
                            <img src="assets/img/clients/client-6.png" alt=""></img>
                            <img src="assets/img/clients/client-7.png" alt=""></img>
                            <img src="assets/img/clients/client-8.png" alt=""></img>
                        </div>

                    </div>
                </section>

                <section id="testimonials" className="section-bg wow fadeInUp">
                    <div className="container">

                        <header className="section-header">
                            <h3>Testimonials</h3>
                        </header>

                        <div className="owl-carousel testimonials-carousel">

                            <div className="testimonial-item">
                                <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt=""></img>
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p>
                                    <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""></img>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""></img>
                                </p>
                            </div>

                            <div className="testimonial-item">
                                <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt=""></img>
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <p>
                                    <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""></img>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""></img>
                                </p>
                            </div>

                            <div className="testimonial-item">
                                <img src="assets/img/testimonial-3.jpg" className="testimonial-img" alt=""></img>
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                    <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""></img>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""></img>
                                </p>
                            </div>

                            <div className="testimonial-item">
                                <img src="assets/img/testimonial-4.jpg" className="testimonial-img" alt=""></img>
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                    <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""></img>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""></img>
                                </p>
                            </div>

                            <div className="testimonial-item">
                                <img src="assets/img/testimonial-5.jpg" className="testimonial-img" alt=""></img>
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <p>
                                    <img src="assets/img/quote-sign-left.png" className="quote-sign-left" alt=""></img>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <img src="assets/img/quote-sign-right.png" className="quote-sign-right" alt=""></img>
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


            </main>
        </React.Fragment>
    );
  }
}

export default Portofolio;