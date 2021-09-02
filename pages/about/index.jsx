import React from 'react'
import AboutHeader from '../../components/pages/about/AboutHeader';
import AboutNav from '../../components/pages/about/AboutNav';
import AboutSection from '../../components/pages/about/AboutSection';
import Body from './../../components/body/Body';
import AboutWhyChose from './../../components/pages/about/AboutWhyChose';

export default function About() {
    return (
        <Body>
            <AboutHeader />
            <AboutNav />
            <AboutSection />
            <AboutWhyChose />
        </Body>
    )
}
