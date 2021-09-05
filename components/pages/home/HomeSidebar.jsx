import React from 'react'
import HomeCategory from './HomeCategory';

export default function HomeSidebar() {
    return (
        <>
            <div className="sidebar-overlay" />
            <div className="sidebar-toggle"><i className="fas fa-sliders-h" /></div>
            <aside className="sidebar-home col-lg-3 order-lg-first mobile-sidebar">
                {/* categories */}
                <HomeCategory />

                <div className="widget widget-banners px-5 pb-3 text-center">
                    {/* start */}

                    {/* //.owlCarousel(); */}

                    {/* end  */}


                    <div className="owl-carousel owl-theme">
                        <div className="banner d-flex flex-column align-items-center">
                            <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="pt-3 ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase m-b-3">45<sup>%</sup><sub>off</sub></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="btn btn-dark btn-md font1">View Sale</a>
                        </div>{/* End .banner */}

                        <div className="banner d-flex flex-column align-items-center">
                            <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="pt-3 ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase m-b-3">45<sup>%</sup><sub>off</sub></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="btn btn-dark btn-md font1">View Sale</a>
                        </div>{/* End .banner */}

                        <div className="banner d-flex flex-column align-items-center">
                            <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="pt-3 ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase m-b-3">45<sup>%</sup><sub>off</sub></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" className="btn btn-dark btn-md font1">View Sale</a>
                        </div>{/* End .banner */}

                    </div>{/* End .banner-slider */}
                </div>{/* End .widget */}
                <div className="widget widget-newsletters bg-gray text-center">
                    <h3 className="widget-title text-uppercase">Subscribe Newsletter</h3>
                    <p className="mb-2">Get all the latest information on Events, Sales and Offers. </p>
                    <form action="#">
                        <div className="form-group position-relative sicon-envolope-letter">
                            <input type="email" className="form-control" name="newsletter-email" placeholder="Email address" />
                        </div>{/* Endd .form-group */}
                        <input type="submit" className="btn btn-primary btn-md" defaultValue="Subscribe" />
                    </form>
                </div>{/* End .widget */}
                <div className="widget widget-testimonials">
                    <div className="owl-carousel owl-theme dots-left">
                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="assets/images/clients/client-1.jpg" alt="client" />
                                </figure>
                                <div>
                                    <h4 className="testimonial-title">john Smith</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>{/* End .testimonial-owner */}
                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat
                                    mi.</p>
                            </blockquote>
                        </div>{/* End .testimonial */}
                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="assets/images/clients/client-2.jpg" alt="client" />
                                </figure>
                                <div>
                                    <h4 className="testimonial-title">Dae Smith</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>{/* End .testimonial-owner */}
                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat
                                    mi.</p>
                            </blockquote>
                        </div>{/* End .testimonial */}
                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="assets/images/clients/client-3.jpg" alt="client" />
                                </figure>
                                <div>
                                    <h4 className="testimonial-title">John Doe</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>{/* End .testimonial-owner */}
                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat
                                    mi.</p>
                            </blockquote>
                        </div>{/* End .testimonial */}
                    </div>{/* End .testimonials-slider */}
                </div>{/* End .widget */}
                <div className="widget widget-posts post-date-in-media">
                    <div className="owl-carousel owl-theme dots-left dots-m-0" data-owl-options="{
								'margin': 20
							}">
                        <article className="post">
                            <div className="post-media">
                                <a href="single.html">
                                    <img src="assets/images/blog/home/post-1.jpg" alt="Post" />
                                </a>
                                <div className="post-date">
                                    <span className="day">29</span>
                                    <span className="month">Jun</span>
                                </div>{/* End .post-date */}
                            </div>{/* End .post-media */}
                            <div className="post-body">
                                <h2 className="post-title m-b-2">
                                    <a href="single.html">Fashion Trends</a>
                                </h2>
                                <div className="post-content">
                                    <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                        ad litora torquent per conubia nostra, per incep tos himens.</p>
                                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                                </div>{/* End .post-content */}
                            </div>{/* End .post-body */}
                        </article>
                        <article className="post">
                            <div className="post-media">
                                <a href="single.html">
                                    <img src="assets/images/blog/home/post-2.jpg" alt="Post" />
                                </a>
                                <div className="post-date">
                                    <span className="day">29</span>
                                    <span className="month">Jun</span>
                                </div>{/* End .post-date */}
                            </div>{/* End .post-media */}
                            <div className="post-body">
                                <h2 className="post-title m-b-2">
                                    <a href="single.html">Fashion Trends</a>
                                </h2>
                                <div className="post-content">
                                    <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                        ad litora torquent per conubia nostra, per incep tos himens.</p>
                                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                                </div>{/* End .post-content */}
                            </div>{/* End .post-body */}
                        </article>
                        <article className="post">
                            <div className="post-media">
                                <a href="single.html">
                                    <img src="assets/images/blog/home/post-3.jpg" alt="Post" />
                                </a>
                                <div className="post-date">
                                    <span className="day">29</span>
                                    <span className="month">Jun</span>
                                </div>{/* End .post-date */}
                            </div>{/* End .post-media */}
                            <div className="post-body">
                                <h2 className="post-title m-b-2">
                                    <a href="single.html">Fashion Trends</a>
                                </h2>
                                <div className="post-content">
                                    <p>Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu
                                        ad litora torquent per conubia nostra, per incep tos himens.</p>
                                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                                </div>{/* End .post-content */}
                            </div>{/* End .post-body */}
                        </article>
                    </div>{/* End .posts-slider */}
                </div>{/* End .widget */}
            </aside>{/* End .col-lg-3 */}
        </>
    )
}
