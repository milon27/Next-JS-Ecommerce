import React from 'react'
import HomeBannerSlider from './HomeBannerSlider'

export default function HomeContent() {
    return (
        <div className="col-lg-9">
            <HomeBannerSlider />



            <div className="banners-container m-b-2 owl-carousel owl-theme" data-owl-options="{
							'dots': false,
							'margin': 20,
							'loop': false,
							'responsive': {
								'480': {
									'items': 2
								},
								'768': {
									'items': 3
								}
							}
						}">
                <div className="banner banner1 banner-hover-shadow mb-2">
                    <figure>
                        <img src="assets/images/banners/banner-1.jpg" alt="banner" />
                    </figure>
                    <div className="banner-layer banner-layer-middle">
                        <h3 className="m-b-2">Porto Watches</h3>
                        <h4 className="m-b-4 text-primary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                        <a href="#" className="text-dark text-uppercase ls-10">Shop Now</a>
                    </div>
                </div>{/* End .banner */}
                <div className="banner banner2 text-uppercase banner-hover-shadow mb-2">
                    <figure>
                        <img src="assets/images/banners/banner-2.jpg" alt="banner" />
                    </figure>
                    <div className="banner-layer banner-layer-middle text-center pt-2">
                        <h3 className="m-b-1 ls-n-20">Deal Promos</h3>
                        <h4 className="m-b-4 text-body">Starting at $99</h4>
                        <a href="#" className="text-dark text-uppercase ls-10">Shop Now</a>
                    </div>
                </div>{/* End .banner */}
                <div className="banner banner3 banner-hover-shadow mb-2">
                    <figure>
                        <img src="assets/images/banners/banner-3.jpg" alt="banner" />
                    </figure>
                    <div className="banner-layer banner-layer-middle text-right">
                        <h3 className="m-b-2">Handbags</h3>
                        <h4 className="mb-3 pb-1 text-secondary text-uppercase">Starting at $99</h4>
                        <a href="#" className="text-dark text-uppercase ls-10">Shop Now</a>
                    </div>
                </div>{/* End .banner */}
            </div>
            <h2 className="section-title ls-n-10 m-b-4">Featured Products</h2>
            <div className="products-slider owl-carousel owl-theme dots-top m-b-1 pb-1">
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/home-featured-1.jpg" />
                        </a>
                        <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                        </div>
                        <div className="btn-icon-group">
                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="category.html" className="product-category">category</a>
                            </div>
                            <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                            <span className="product-price">$9.00</span>
                        </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/home-featured-2.jpg" />
                        </a>
                        <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                        </div>
                        <div className="btn-icon-group">
                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="category.html" className="product-category">category</a>
                            </div>
                            <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                            <span className="product-price">$9.00</span>
                        </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/home-featured-3.jpg" />
                        </a>
                        <div className="btn-icon-group">
                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="category.html" className="product-category">category</a>
                            </div>
                            <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                            <span className="product-price">$9.00</span>
                        </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/home-featured-4.jpg" />
                        </a>
                        <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-30%</div>
                        </div>
                        <div className="btn-icon-group">
                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="category.html" className="product-category">category</a>
                            </div>
                            <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                            <span className="product-price">$9.00</span>
                        </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/home-featured-5.jpg" />
                        </a>
                        <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                        </div>
                        <div className="btn-icon-group">
                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
                        </div>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                    </figure>
                    <div className="product-details">
                        <div className="category-wrap">
                            <div className="category-list">
                                <a href="category.html" className="product-category">category</a>
                            </div>
                            <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        </div>
                        <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                        </div>{/* End .product-container */}
                        <div className="price-box">
                            <span className="product-price">$9.00</span>
                        </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                </div>
            </div>{/* End .featured-proucts */}
            <div className="brands-slider owl-carousel owl-theme images-center mb-3" data-owl-options="{
							'responsive': {
								'768': {
									'items': 5
								}
							}
						}">
                <img src="assets/images/brands/brand1.png" width={140} height={60} alt="brand" />
                <img src="assets/images/brands/brand2.png" width={140} height={60} alt="brand" />
                <img src="assets/images/brands/brand3.png" width={140} height={60} alt="brand" />
                <img src="assets/images/brands/brand4.png" width={140} height={60} alt="brand" />
                <img src="assets/images/brands/brand5.png" width={140} height={60} alt="brand" />
                <img src="assets/images/brands/brand6.png" width={140} height={60} alt="brand" />
            </div>{/* End .brands-slider */}
            <div className="row products-widgets">
                <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                    <div className="product-column">
                        <h3 className="section-sub-title ls-n-20">Top Rated Products</h3>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-3.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-4.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-1.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .product-column */}
                </div>{/* End .col-md-4 */}
                <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                    <div className="product-column">
                        <h3 className="section-sub-title ls-n-20">Best Selling Products</h3>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-1.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-2.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-5.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .product-column */}
                </div>{/* End .col-md-4 */}
                <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                    <div className="product-column">
                        <h3 className="section-sub-title ls-n-20">Latest Products</h3>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-4.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/small/product-1.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                        <div className="product-default left-details product-widget mb-3">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/home-featured-3.jpg" />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h2 className="product-title">
                                    <a href="product.html">Product Short Name</a>
                                </h2>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '100%' }} />
                                        {/* End .ratings */}
                                        <span className="tooltiptext tooltip-top" />
                                    </div>{/* End .product-ratings */}
                                </div>{/* End .product-container */}
                                <div className="price-box">
                                    <span className="product-price">$49.00</span>
                                </div>{/* End .price-box */}
                            </div>{/* End .product-details */}
                        </div>
                    </div>{/* End .product-column */}
                </div>{/* End .col-md-4 */}
            </div>{/* End .row */}
            <hr className="mt-1 mb-4" />
            <div className="feature-boxes-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-box px-sm-3 feature-box-simple text-center">
                            <i className="icon-earphones-alt" />
                            <div className="feature-box-content">
                                <h3 className="m-b-1">Customer Support</h3>
                                <h5 className="m-b-3">Need Assistance?</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    vestibulum magna, et dapib.</p>
                            </div>{/* End .feature-box-content */}
                        </div>{/* End .feature-box */}
                    </div>{/* End .col-md-4 */}
                    <div className="col-md-4">
                        <div className="feature-box px-sm-3 feature-box-simple text-center">
                            <i className="icon-credit-card" />
                            <div className="feature-box-content">
                                <h3 className="m-b-1">Secured Payment</h3>
                                <h5 className="m-b-3">Safe &amp; Fast</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    vestibulum magna, et dapib.</p>
                            </div>{/* End .feature-box-content */}
                        </div>{/* End .feature-box */}
                    </div>{/* End .col-md-4 */}
                    <div className="col-md-4">
                        <div className="feature-box px-sm-3 feature-box-simple text-center">
                            <i className="icon-action-undo" />
                            <div className="feature-box-content">
                                <h3 className="m-b-1">Returns</h3>
                                <h5 className="m-b-3">Easy &amp; Free</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                                    vestibulum magna, et dapib.</p>
                            </div>{/* End .feature-box-content */}
                        </div>{/* End .feature-box */}
                    </div>{/* End .col-md-4 */}
                </div>{/* End .row */}
            </div>{/* End .feature-boxes-container */}
        </div>

    )
}
