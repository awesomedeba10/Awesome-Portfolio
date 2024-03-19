import React from "react";
import Head from "next/head";
import { metaData } from "../utils/pageData";

export default function HeadBlock({ ...optionalProps }) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>
                    {optionalProps?.title
                        ? `${metaData.title} | ${optionalProps.title}`
                        : metaData.title}
                </title>
                <meta name="robots" content="max-image-preview:large" />
                <meta name="description" content={metaData.description} />
                <meta name="generator" content={metaData.generator} />
                <meta name="theme-color" content={metaData.themeColor} />

                <link rel="icon" href={metaData.icon} sizes="32x32" />
                <link rel="apple-touch-icon" href={metaData.icon} />
                <meta name="msapplication-TileImage" content={metaData.icon} />
            </Head>
        </div>
    );
}
