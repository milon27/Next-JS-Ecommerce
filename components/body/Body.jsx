import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import HeadTags from '../header/HeadTags'
import NavMenu from '../header/NavMenu'
import TopNotice from '../header/TopNotice'
import FooterContent from './../footer/FooterContent';
import useScript from './../hooks/useScript';

export default function Body({ children }) {

    useScript("./assets/js/jquery.min.js")
    useScript("./assets/js/bootstrap.bundle.min.js")
    useScript("./assets/js/plugins.min.js")
    useScript("./assets/js/main.js")

    return (
        <>
            <HeadTags />
            {/* here will start our page wrapper */}
            <div className="page-wrapper">
                <TopNotice />
                <NavMenu />
                <main className="main">
                    {children}
                </main>
                <FooterContent />
            </div>
            <Footer />
        </>
    )
}
