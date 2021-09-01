import React from 'react'
import Head from 'next/head'

function Header() {
    return (

        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Porto - Bootstrap eCommerce Template</title>
                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="Porto - Bootstrap eCommerce Template" />
                <meta name="author" content="SW-THEMES" />
            </Head>
            <div className="page-wrapper">
                <div className="top-notice text-white bg-dark">
                    <div className="container text-center">
                        <h5 className="d-inline-block mb-0 mr-2">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                        <a href="category.html" className="category">MEN</a>
                        <a href="category.html" className="category ml-2 mr-3">WOMEN</a>
                        <small>* Limited time only</small>
                        <button title="Close (Esc)" type="button" className="mfp-close">×</button>
                    </div>{/* End .container */}
                </div>{/* End .top-notice */}


            </div>

        </>

    )
}

export default Header

