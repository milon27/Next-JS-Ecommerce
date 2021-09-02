import React from 'react'

export default function AboutNav() {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home" /></a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </div>{/* End .container */}
        </nav>
    )
}
