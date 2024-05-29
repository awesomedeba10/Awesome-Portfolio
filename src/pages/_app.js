import { useState, useEffect } from "react";
import Layout from "../components/Layout";

import '../styles/globals.css';
import initGlobalImports from "../utils/imports/globalInit";

export default function App({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);
    const [isClient, setIsClient] = useState(false);
    let pageSpecificProperties = Component.pageProps || {};

    useEffect(() => {
        setIsClient(true);
        initGlobalImports();
    }, []);

    return getLayout(
        <Layout pageSpecificProperties={pageSpecificProperties}>
            <Component {...pageProps} />
        </Layout>
    );
}
