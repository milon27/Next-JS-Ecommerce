import React from 'react'
import Head from 'next/head'


export default function HeadTags() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Porto - Bootstrap eCommerce Template</title>
            <meta name="keywords" content="HTML5 Template" />
            <meta name="description" content="Porto - Bootstrap eCommerce Template" />
            <meta name="author" content="SW-THEMES" />
            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="assets/images/icons/favicon.ico" />


            {/* <Script strategy="beforeInteractive" src="./assets/js/jquery.min.js" />
            <Script strategy="beforeInteractive" src="./assets/js/bootstrap.bundle.min.js" />
            <Script strategy="beforeInteractive" src="./assets/js/plugins.min.js" />
            <Script strategy="beforeInteractive" src="./assets/js/main.js" /> */}


            {/* 
            <script async src="./assets/js/jquery.min.js" />
            <script async src="./assets/js/bootstrap.bundle.min.js" />
            <script async src="./assets/js/plugins.min.js" />
            <script async src="./assets/js/main.min.js" /> */}
        </Head>
    )
}
