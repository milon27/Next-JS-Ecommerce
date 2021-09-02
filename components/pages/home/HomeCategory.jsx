import React from 'react'

export default function HomeCategory() {
    return (
        <div className="side-menu-wrapper text-uppercase mb-2 d-none d-lg-block">
            <h2 className="side-menu-title bg-gray ls-n-25">Browse Categories</h2>
            <nav className="side-nav">
                <ul className="menu menu-vertical sf-arrows">
                    <li className="active"><a href="index.html"><i className="icon-home" />Home</a></li>
                    <li>
                        <a href="category.html" className="sf-with-ul"><i className="sicon-badge" />Categories</a>
                        <div className="megamenu megamenu-fixed-width megamenu-3cols">
                            <div className="row">
                                <div className="col-lg-4">
                                    <a href="#" className="nolink">VARIATION 1</a>
                                    <ul className="submenu">
                                        <li><a href="category.html">Fullwidth Banner</a></li>
                                        <li><a href="category-banner-boxed-slider.html">Boxed Slider
                                            Banner</a></li>
                                        <li><a href="category-banner-boxed-image.html">Boxed Image
                                            Banner</a></li>
                                        <li><a href="category.html">Left Sidebar</a></li>
                                        <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                        <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                        <li><a href="category-horizontal-filter1.html">Horizontal
                                            Filter1</a></li>
                                        <li><a href="category-horizontal-filter2.html">Horizontal
                                            Filter2</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#" className="nolink">VARIATION 2</a>
                                    <ul className="submenu">
                                        <li><a href="category-list.html">List Types</a></li>
                                        <li><a href="category-infinite-scroll.html">Ajax Infinite
                                            Scroll</a></li>
                                        <li><a href="category.html">3 Columns Products</a></li>
                                        <li><a href="category-4col.html">4 Columns Products</a></li>
                                        <li><a href="category-5col.html">5 Columns Products</a></li>
                                        <li><a href="category-6col.html">6 Columns Products</a></li>
                                        <li><a href="category-7col.html">7 Columns Products</a></li>
                                        <li><a href="category-8col.html">8 Columns Products</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 p-0">
                                    <img src="assets/images/menu-banner.jpg" alt="Menu banner" />
                                </div>
                            </div>
                        </div>{/* End .megamenu */}
                    </li>
                    <li>
                        <a href="product.html" className="sf-with-ul"><i className="sicon-basket" />Products</a>
                        <div className="megamenu megamenu-fixed-width">
                            <div className="row">
                                <div className="col-lg-3">
                                    <a href="#" className="nolink">Variations 1</a>
                                    <ul className="submenu">
                                        <li><a href="product.html">Horizontal Thumbs</a></li>
                                        <li><a href="product-full-width.html">Vertical Thumbnails</a>
                                        </li>
                                        <li><a href="product.html">Inner Zoom</a></li>
                                        <li><a href="product-addcart-sticky.html">Addtocart Sticky</a>
                                        </li>
                                        <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                    </ul>
                                </div>{/* End .col-lg-4 */}
                                <div className="col-lg-3">
                                    <a href="#" className="nolink">Variations 2</a>
                                    <ul className="submenu">
                                        <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                        <li><a href="product-simple.html">Simple Product</a></li>
                                        <li><a href="product-sidebar-left.html">With Left Sidebar</a>
                                        </li>
                                    </ul>
                                </div>{/* End .col-lg-4 */}
                                <div className="col-lg-3">
                                    <a href="#" className="nolink">Product Layout Types</a>
                                    <ul className="submenu">
                                        <li><a href="product.html">Default Layout</a></li>
                                        <li><a href="product-extended-layout.html">Extended Layout</a>
                                        </li>
                                        <li><a href="product-full-width.html">Full Width Layout</a></li>
                                        <li><a href="product-grid-layout.html">Grid Images Layout</a>
                                        </li>
                                        <li><a href="product-sticky-both.html">Sticky Both Side Info</a>
                                        </li>
                                        <li><a href="product-sticky-info.html">Sticky Right Side
                                            Info</a></li>
                                    </ul>
                                </div>{/* End .col-lg-4 */}
                                <div className="col-lg-3 p-0">
                                    <img src="assets/images/menu-bg.png" alt="Menu banner" className="product-promo" />
                                </div>{/* End .col-lg-4 */}
                            </div>{/* End .row */}
                        </div>{/* End .megamenu */}
                    </li>
                    <li>
                        <a href="#" className="sf-with-ul"><i className="sicon-envelope" />Pages</a>
                        <ul>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li><a href="#">Checkout</a>
                                <ul>
                                    <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                    <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                    <li><a href="checkout-review.html">Checkout Review</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Dashboard</a>
                                <ul>
                                    <li><a href="dashboard.html">Dashboard</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#" className="login-link">Login</a></li>
                            <li><a href="forgot-password.html">Forgot Password</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="sf-with-ul"><i className="sicon-book-open" />Features</a>
                        <ul>
                            <li><a href="#">Header Types</a></li>
                            <li><a href="#">Footer Types</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i className="sicon-users" />About Us</a></li>
                    <li><a href="#"><i className="icon-cat-gift" />Special Offer!</a></li>
                    <li><a href="https://1.envato.market/DdLk5" target="_blank"><i className="sicon-star" />Buy Porto!<span className="tip tip-hot">Hot</span></a></li>
                </ul>
            </nav>
        </div>
    )
}
