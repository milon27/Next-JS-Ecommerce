import React from 'react'

export default function TopNotice() {
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

        </>
    )
}
