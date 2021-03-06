import React from 'react'
import FooterExtra from './FooterExtra'

export default function Footer() {
    return (
        <>

            <FooterExtra />

            {/* <!-- Plugins JS File --> */}
            <script src="./assets/js/jquery.min.js"></script>
            <script src="./assets/js/bootstrap.bundle.min.js"></script>
            <script src="./assets/js/plugins.min.js"></script>

            {/* <!-- Main JS File --> */}
            <script src="./assets/js/main.min.js"></script>
        </>
    )
}
