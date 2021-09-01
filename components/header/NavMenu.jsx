import React from 'react'

export default function NavMenu() {
    return (
        <>
            <div className="top-notice text-white bg-dark">
                <div className="container text-center">
                    <h5 className="d-inline-block mb-0 mr-2">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                    <a href="category.html" className="category">MEN</a>
                    <a href="category.html" className="category ml-2 mr-3">WOMEN</a>
                    <small>* Limited time only</small>
                    <button title="Close (Esc)" type="button" className="mfp-close">×</button>
                </div>{/* End .container */}
            </div>{/* End .top-notice */}
            <header className="header">
                <div className="header-top bg-primary text-uppercase">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-dropdown">
                                <a href="#" className="pl-0"><img src="assets/images/flags/en.png" alt="England flag" />ENG</a>
                                <div className="header-menu">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/flags/en.png" alt="England flag" />ENG</a>
                                        </li>
                                        <li><a href="#"><img src="assets/images/flags/fr.png" alt="France flag" />FRA</a></li>
                                    </ul>
                                </div>{/* End .header-menu */}
                            </div>{/* End .header-dropown */}
                            <div className="header-dropdown ml-4">
                                <a href="#">USD</a>
                                <div className="header-menu">
                                    <ul>
                                        <li><a href="#">EUR</a></li>
                                        <li><a href="#">USD</a></li>
                                    </ul>
                                </div>{/* End .header-menu */}
                            </div>{/* End .header-dropown */}
                        </div>{/* End .header-left */}
                        <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                            <p className="top-message mb-0 mr-lg-5 pr-3 d-none d-sm-block">Welcome To Porto!</p>
                            <div className="header-dropdown dropdown-expanded mr-3">
                                <a href="#">Links</a>
                                <div className="header-menu">
                                    <ul>
                                        <li><a href="my-account.html">Track Order </a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="category.html">Our Stores</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="#">Help &amp; FAQs</a></li>
                                    </ul>
                                </div>{/* End .header-menu */}
                            </div>{/* End .header-dropown */}
                            <span className="separator" />
                            <div className="social-icons">
                                <a href="#" className="social-icon social-instagram icon-instagram" target="_blank" />
                                <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" />
                                <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" />
                            </div>{/* End .social-icons */}
                        </div>{/* End .header-right */}
                    </div>{/* End .container */}
                </div>{/* End .header-top */}
                <div className="header-middle text-dark">
                    <div className="container">
                        <div className="header-left col-lg-2 w-auto pl-0">
                            <button className="mobile-menu-toggler mr-2" type="button">
                                <i className="icon-menu" />
                            </button>
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo.png" alt="Porto Logo" />
                            </a>
                        </div>{/* End .header-left */}
                        <div className="header-right w-lg-max pl-2">
                            <div className="header-search header-icon header-search-inline header-search-category w-lg-max mr-lg-4">
                                <a href="#" className="search-toggle" role="button"><i className="icon-search-3" /></a>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper">
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required />
                                        <div className="select-custom">
                                            <select id="cat" name="cat">
                                                <option value>All Categories</option>
                                                <option value={4}>Fashion</option>
                                                <option value={12}>- Women</option>
                                                <option value={13}>- Men</option>
                                                <option value={66}>- Jewellery</option>
                                                <option value={67}>- Kids Fashion</option>
                                                <option value={5}>Electronics</option>
                                                <option value={21}>- Smart TVs</option>
                                                <option value={22}>- Cameras</option>
                                                <option value={63}>- Games</option>
                                                <option value={7}>Home &amp; Garden</option>
                                                <option value={11}>Motors</option>
                                                <option value={31}>- Cars and Trucks</option>
                                                <option value={32}>- Motorcycles &amp; Powersports</option>
                                                <option value={33}>- Parts &amp; Accessories</option>
                                                <option value={34}>- Boats</option>
                                                <option value={57}>- Auto Tools &amp; Supplies</option>
                                            </select>
                                        </div>{/* End .select-custom */}
                                        <button className="btn p-0 icon-search-3" type="submit" />
                                    </div>{/* End .header-search-wrapper */}
                                </form>
                            </div>{/* End .header-search */}
                            <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-3 ml-xl-5">
                                <i className="icon-phone-2" />
                                <h6 className="pt-1 line-height-1">Call us now<a href="tel:#" className="d-block text-dark ls-10 pt-1">+123 5678 890</a></h6>
                            </div>{/* End .header-contact */}
                            <a href="login.html" className="header-icon login-link"><i className="icon-user-2" /></a>
                            <a href="#" className="header-icon"><i className="icon-wishlist-2" /></a>
                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle dropdown-arrow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart" />
                                    <span className="cart-count badge-circle">2</span>
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdownmenu-wrapper">
                                        <div className="dropdown-cart-header">
                                            <span>2 Items</span>
                                            <a href="cart.html" className="float-right">View Cart</a>
                                        </div>{/* End .dropdown-cart-header */}
                                        <div className="dropdown-cart-products">
                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Woman Ring</a>
                                                    </h4>
                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        x $99.00
                                                    </span>
                                                </div>{/* End .product-details */}
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" width={80} height={80} />
                                                    </a>
                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" />
                                                </figure>
                                            </div>{/* End .product */}
                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Woman Necklace</a>
                                                    </h4>
                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        x $35.00
                                                    </span>
                                                </div>{/* End .product-details */}
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" width={80} height={80} />
                                                    </a>
                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" />
                                                </figure>
                                            </div>{/* End .product */}
                                        </div>{/* End .cart-product */}
                                        <div className="dropdown-cart-total">
                                            <span>Total</span>
                                            <span className="cart-total-price float-right">$134.00</span>
                                        </div>{/* End .dropdown-cart-total */}
                                        <div className="dropdown-cart-action">
                                            <a href="checkout-shipping.html" className="btn btn-dark btn-block">Checkout</a>
                                        </div>{/* End .dropdown-cart-total */}
                                    </div>{/* End .dropdownmenu-wrapper */}
                                </div>{/* End .dropdown-menu */}
                            </div>{/* End .dropdown */}
                        </div>{/* End .header-right */}
                    </div>{/* End .container */}
                </div>{/* End .header-middle */}
            </header>{/* End .header */}
        </>
    )
}
