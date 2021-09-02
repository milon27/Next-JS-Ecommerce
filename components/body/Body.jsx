import React from 'react'
import Footer from '../footer/Footer'
import HeadTags from '../header/HeadTags'
import NavMenu from '../header/NavMenu'
import TopNotice from '../header/TopNotice'
import FooterContent from './../footer/FooterContent';

export default function Body({ children }) {
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
