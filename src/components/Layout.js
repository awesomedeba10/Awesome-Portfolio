import Link from "next/link";

import { kanit } from "../utils/fonts";

import HeadBlock from "./HeadBlock";
import FooterBlock from "./FooterBlock";

export default function Layout({ children, pageSpecificProperties }) {
    return (
        <>
            <HeadBlock title={pageSpecificProperties.title} />

            <div className="mouse-follower">
                <span className="cursor-outline"></span>
                <span className="cursor-dot"></span>
            </div>
            <div id="preloader">
                <div className="layla-preloader text-center"></div>
            </div>

            <main className="main overflow-hidden body-bg">
                <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap"></div>

                {pageSpecificProperties.redirectBackHref && (
                    <div className="container position-relative cus-z1 d-flex justify-content-center justify-content-lg-start mt-4">
                        <div className="inline-flex">
                            <Link href={pageSpecificProperties.redirectBackHref} className={`fw_400 fs-seven n0-color text-uppercase golelayla-logo ${kanit.className}`}>
                                <svg className="inline-flex" width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M20.5019 12H3.67188" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span className="ms-1 n0-color">
                                    Back To <span className="s1-color">{pageSpecificProperties.redirectBackTo}</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                )}

                {children}
                <FooterBlock />
            </main>
        </>
    );
}
