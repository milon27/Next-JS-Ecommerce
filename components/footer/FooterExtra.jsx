import React from 'react'

export default function FooterExtra() {
    return (
        <>
            <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-cancel" /></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu mb-3">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li>
                                <a href="category.html">Categories</a>
                                <ul>
                                    <li><a href="category.html">Full Width Banner</a></li>
                                    <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                    <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                    <li><a href="category.html">Left Sidebar</a></li>
                                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                    <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                    <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                    <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                                    <li><a href="#">List Types</a></li>
                                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span className="tip tip-new">New</span></a></li>
                                    <li><a href="category.html">3 Columns Products</a></li>
                                    <li><a href="category-4col.html">4 Columns Products</a></li>
                                    <li><a href="category-5col.html">5 Columns Products</a></li>
                                    <li><a href="category-6col.html">6 Columns Products</a></li>
                                    <li><a href="category-7col.html">7 Columns Products</a></li>
                                    <li><a href="category-8col.html">8 Columns Products</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="product.html">Products</a>
                                <ul>
                                    <li>
                                        <a href="#">Variations</a>
                                        <ul>
                                            <li><a href="product.html">Horizontal Thumbs</a></li>
                                            <li><a href="product-full-width.html">Vertical Thumbnails<span className="tip tip-hot">Hot!</span></a></li>
                                            <li><a href="product.html">Inner Zoom</a></li>
                                            <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                            <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Variations</a>
                                        <ul>
                                            <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                            <li><a href="product-simple.html">Simple Product</a></li>
                                            <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Product Layout Types</a>
                                        <ul>
                                            <li><a href="product.html">Default Layout</a></li>
                                            <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                            <li><a href="product-full-width.html">Full Width Layout</a></li>
                                            <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                            <li><a href="product-sticky-both.html">Sticky Both Side Info<span className="tip tip-hot">Hot!</span></a></li>
                                            <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages<span className="tip tip-hot">Hot!</span></a>
                                <ul>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li>
                                        <a href="#">Checkout</a>
                                        <ul>
                                            <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                            <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                            <li><a href="checkout-review.html">Checkout Review</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#" className="login-link">Login</a></li>
                                    <li><a href="forgot-password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="single.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#">Special Offer!<span className="tip tip-hot">Hot!</span></a></li>
                            <li><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
                        </ul>
                        <ul className="mobile-menu">
                            <li><a href="my-account.html">Track Order </a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="category.html">Our Stores</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="#">Help &amp; FAQs</a></li>
                        </ul>
                    </nav>{/* End .mobile-nav */}
                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
                        <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
                    </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}
            <div className="newsletter-popup mfp-hide" id="newsletter-popup-form" style={{ background: '#f1f1f1 no-repeat center/cover url(assets/images/newsletter_popup_bg.jpg)' }}>
                <div className="newsletter-popup-content">
                    <img src="assets/images/logo-black.png" alt="Logo" className="logo-newsletter" />
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Subscribe to the Porto eCommerce newsletter to receive timely updates from your favorite products.</p>
                    <form action="#">
                        <div className="input-group">
                            <input type="email" className="form-control" id="newsletter-email" name="newsletter-email" placeholder="Email address" required />
                            <input type="submit" className="btn" defaultValue="Go!" />
                        </div>{/* End .from-group */}
                    </form>
                    <div className="newsletter-subscribe">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" defaultValue={1} />
                                Don't show this popup again
                            </label>
                        </div>
                    </div>
                </div>{/* End .newsletter-popup-content */}
            </div>{/* End .newsletter-popup */}
            {/* Add Cart Modal */}
            <div className="modal fade" id="addCartModal" tabIndex={-1} role="dialog" aria-labelledby="addCartModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body add-cart-box text-center">
                            <p>You've just added this product to the<br />cart:</p>
                            <h4 id="productTitle" />
                            <img src="#" id="productImage" width={100} height={100} alt="adding cart image" />
                            <div className="btn-actions">
                                <a href="cart.html"><button className="btn-primary">Go to cart page</button></a>
                                <a href="#"><button className="btn-primary" data-dismiss="modal">Continue</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="scroll-top" href="#top" title="Top" role="button"><i className="icon-angle-up" /></a>


        </>
    )
}
