import React from 'react'
import Body from '../../components/Body';
import Header from '../../components/Header'
import Footer from './../../components/Footer';

export default function Home() {
    return (
        <>

            <Header />

            <Body>
                <div className="container">
                    <div className="row">
                        <div className="col">one</div>
                        <div className="col">two</div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    )
}
