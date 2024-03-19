import React from "react";
import Head from "next/head";

export default function HeadBlock() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Code & Canvas: A Showcase of My Work</title>
                <meta name='robots' content='max-image-preview:large' />
                <meta name="theme-color" content="#726342" />
            </Head>
        </div>
    );
}