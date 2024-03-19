import Layout from "../components/Layout";
import { useState, useEffect } from "react";

import initImports from "../utils/import";

export default function App({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        initImports();
    }, []);

    return getLayout(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
