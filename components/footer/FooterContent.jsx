import React from 'react'

export default function FooterContent() {
    return (
        <>
            <footer className="footer bg-dark">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                <div className="widget">
                                    <h4 className="widget-title">About Us</h4>
                                    <img src="assets/images/logo-footer.png" alt="Logo" className="m-b-3" />
                                    <p className="m-b-4 pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                        vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                                    <a href="#" className="read-more text-white">read more...</a>
                                </div>{/* End .widget */}
                            </div>{/* End .col-lg-3 */}
                            <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                <div className="widget mb-2">
                                    <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                                    <ul className="contact-info m-b-4">
                                        <li>
                                            <span className="contact-info-label">Address:</span>123 Street Name, City, England
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Phone:</span><a href="tel:">(123) 456-7890</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                                        </li>
                                        <li>
                                            <span className="contact-info-label">Working Days/Hours:</span>
                                            Mon - Sun / 9:00 AM - 8:00 PM
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                                        <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                                        <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin" />
                                    </div>{/* End .social-icons */}
                                </div>{/* End .widget */}
                            </div>{/* End .col-lg-3 */}
                            <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                <div className="widget">
                                    <h4 className="widget-title pb-1">Customer Service</h4>
                                    <ul className="links">
                                        <li><a href="#">Help &amp; FAQs</a></li>
                                        <li><a href="#">Order Tracking</a></li>
                                        <li><a href="#">Shipping &amp; Delivery</a></li>
                                        <li><a href="#">Orders History</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Corporate Sales</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>{/* End .widget */}
                            </div>{/* End .col-lg-3 */}
                            <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                                <div className="widget">
                                    <h4 className="widget-title">Popular Tags</h4>
                                    <div className="tagcloud">
                                        <a href="#">Bag</a>
                                        <a href="#">Black</a>
                                        <a href="#">Blue</a>
                                        <a href="#">Clothes</a>
                                        <a href="#">Fashion</a>
                                        <a href="#">Hub</a>
                                        <a href="#">Jean</a>
                                        <a href="#">Shirt</a>
                                        <a href="#">Skirt</a>
                                        <a href="#">Sports</a>
                                        <a href="#">Sweater</a>
                                        <a href="#">Winter</a>
                                    </div>
                                </div>{/* End .widget */}
                            </div>{/* End .col-lg-3 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                </div>{/* End .footer-middle */}
                <div className="container">
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-copyright py-3 pr-4 mb-0">© Porto eCommerce. 2020. All Rights Reserved</p>
                        <img src="assets/images/payments.png" alt="payment methods" className="footer-payments py-3" />
                    </div>
                </div>{/* End .container */}
            </footer>{/* End .footer */}

        </>
    )
}
