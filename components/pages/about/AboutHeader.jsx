import React from 'react'

export default function AboutHeader() {
    return (
        <div className="page-header page-header-bg text-left" style={{ background: '70%/cover #D4E1EA url("assets/images/page-header-bg.jpg")' }}>
            <div className="container">
                <h1><span>ABOUT US</span>
                    OUR COMPANY</h1>
                <a href="contact.html" className="btn btn-dark">Contact</a>
            </div>{/* End .container */}
        </div>

    )
}
