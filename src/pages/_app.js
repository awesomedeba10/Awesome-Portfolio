import { useState, useEffect } from "react";
import Layout from "../components/Layout";

import "../styles/plugins/bootstrap.min.css";

import "../styles/common.css";
import "../styles/custom.css";
import "../styles/blog.css";
import "../styles/light.css";
import "../styles/spacing.css";
import "../styles/responsive.css";
import "../styles/custom-frontend-lite.min.css";
import "../styles/elementor-post.min.css";
import "../styles/elementor-global.min.css";

import initImports from "../utils/import";

export default function App({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);
    const [isClient, setIsClient] = useState(false);
    let pageSpecificProperties = Component.pageProps || {};

    useEffect(() => {
        setIsClient(true);
        initImports();
    }, []);

    return getLayout(
        <Layout pageSpecificProperties={pageSpecificProperties}>
            <Component {...pageProps} />
        </Layout>
    );
}
