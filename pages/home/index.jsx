import React from 'react'
import Body from '../../components/body/Body'
import HomeContent from '../../components/pages/home/content/HomeContent'
import HomeOffer from '../../components/pages/home/HomeOffer'
import HomeSidebar from '../../components/pages/home/HomeSidebar'


//localhost:3000/home

export default function Home() {
    return (
        <>
            <Body>
                <div className="container mb-2">
                    {/* offer component */}
                    <HomeOffer />
                    <div className="row">
                        <HomeContent />
                        <HomeSidebar />
                    </div>
                </div>

            </Body>

        </>

    )
}
