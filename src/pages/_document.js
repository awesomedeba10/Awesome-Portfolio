import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="home page-template-default page page-id-23 wp-embed-responsive no-sidebar elementor-default elementor-kit-9 elementor-page elementor-page-23">
                <div className="mouse-follower">
                    <span className="cursor-outline"></span>
                    <span className="cursor-dot"></span>
                </div>
                <div id="preloader">
                    <div className="layla-preloader text-center"></div>
                </div>

                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
