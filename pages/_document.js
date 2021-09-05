import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    {/* <script async={true} type="text/javascript" src="./assets/js/jquery.min.js" ></script>
                    <script async={true} type="text/javascript" src="./assets/js/bootstrap.bundle.min.js" ></script>
                    <script async={true} type="text/javascript" src="./assets/js/plugins.min.js" ></script>
                    <script async={true} type="text/javascript" src="./assets/js/main.js" ></script> */}

                </body>
            </Html>
        )
    }
}

export default MyDocument