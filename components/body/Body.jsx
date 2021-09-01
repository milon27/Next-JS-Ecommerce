import React from 'react'
import Footer from '../footer/Footer';
import Header from './../header/Header';
import NavMenu from './../header/NavMenu';

export default function Body({ children }) {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <NavMenu />
                <main className="main">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
