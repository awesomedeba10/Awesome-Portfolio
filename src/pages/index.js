import Link from "next/link";
import { userData } from "../utils/pageData";
import { vollkorn } from "../utils/fonts";

import ElementFooterLink from "../components/ElementFooterLink";
import SocialProfileList from "../components/SocialProfileList";

export default function Home() {
    return (
        <div className={`tp-page-area mt-xxl-10 mt-xl-8 mt-6 ${vollkorn.className}`}>
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-page-content" data-aos="zoom-in-down" data-aos-duration="1500">
                            <div className="tp-page-post">
                                <div data-elementor-type="wp-page" data-elementor-id="56"
                                    className="elementor">
                                    <div className="elementor-element elementor-element-foremost-outer e-con-full e-flex e-con e-parent">
                                        <div className="elementor-element elementor-element-outer container m-auto e-flex e-con-boxed e-con e-child">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-inner e-con-full e-flex e-con e-child">
                                                    <div className="elementor-element elementor-element-foremost-inner e-flex e-con-boxed e-con e-child">
                                                        <div className="e-con-inner">
                                                            <div className="elementor-element elementor-element-first-layer e-con-full e-flex e-con e-child">
                                                                <div className="elementor-element elementor-element-second-layer e-con-full e-flex e-con e-child">
                                                                    <div className="elementor-element elementor-element-third-layer elementor-widget elementor-widget-tp-biography">
                                                                        <div className="elementor-widget-container">
                                                                            <div className="lyla-box1 cmn-box py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                                                                <div className="justify-center flex layla-thumb layla-thumbtwo m-auto text-center mt-4 mb-13"
                                                                                    data-aos="fade-up"
                                                                                    data-aos-duration="2000">
                                                                                    <img decoding="async"
                                                                                        src="/profile.webp"
                                                                                        alt="image" className="radius100"/>
                                                                                    <div className="textcircle">
                                                                                        <div className="text">
                                                                                            <p>Code & Canvas: A Showcase
                                                                                                of My Work •
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex justify-content-center">
                                                                                    <Link href="/about"
                                                                                        className="cmn-btn text-center justify-content-center gap-2 d-inline-flex align-items-center py-2 px-4">
                                                                                        <span className="n0-color">
                                                                                            I’m {userData.name} </span>
                                                                                            <i class="icon fa-regular fa-hand-peace"></i>
                                                                                    </Link>
                                                                                </div>
                                                                                <ElementFooterLink name="The Scoop on Me" redirectTo="/about"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-element elementor-element-0e706a5 e-flex e-con-boxed e-con e-child"
                                                                    data-id="0e706a5" 
                                                                    data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                                                                    <div className="e-con-inner">
                                                                        <div className="elementor-element elementor-element-ef27517 elementor-widget elementor-widget-tp-article"
                                                                            data-id="ef27517" data-element_type="widget"
                                                                            data-widget_type="tp-article.default">
                                                                            <div className="elementor-widget-container">
                                                                                <a href="article/index.html"
                                                                                    className="common-serbox d-block cmn-box py-xxl-6 py-xl-6 py-lg-4 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4"
                                                                                    data-aos="fade-up"
                                                                                    data-aos-duration="1000">
                                                                                    <span
                                                                                        className="d-block mb-xxl-19 mb-14 fw_500 fs-five n0-color">
                                                                                        Articles &amp; <span
                                                                                            className="d-block fw_500 fs-five n0-color ms-8">
                                                                                            Publications</span>
                                                                                    </span>
                                                                                    <span
                                                                                        className="cmn-svg d-flex cmn-footarrow align-items-center justify-content-between">
                                                                                        <span
                                                                                            className="fw_500 fs-seven n0-color">
                                                                                            All Blog
                                                                                        </span>
                                                                                        <svg width="58" height="40"
                                                                                            viewBox="0 0 58 40"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                                                                fill="white" />
                                                                                            <path
                                                                                                d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                                                                fill="white" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    <img decoding="async"
                                                                                        src="/shapes/s-shape3.png"
                                                                                        alt="image" className="s-shape3"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4108db2 e-con-full e-flex e-con e-child">
                                                                <div className="elementor-element elementor-element-92766eb e-flex e-con-boxed e-con e-child">
                                                                    <div className="e-con-inner">
                                                                        <div className="elementor-element elementor-element-1b23ef5 e-con-full e-flex e-con e-child">
                                                                            <div className="elementor-element elementor-element-82afffe elementor-widget elementor-widget-tp-designation">
                                                                                <div className="elementor-widget-container">
                                                                                    <div className="designation-box">
                                                                                        <div
                                                                                            className="cmn-box py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                                                                            <h5
                                                                                                className="fs-4 s1-color mb-6 fw_500 title-extraclr">
                                                                                                Title
                                                                                            </h5>
                                                                                            <h3 className="titles-designer">
                                                                                                <a href="javascript:void(0)"
                                                                                                    className="fs-2 fw-semibold">{userData.introTitle}</a>
                                                                                            </h3>
                                                                                            <img decoding="async"
                                                                                                src="/shapes/s-shape1.png"
                                                                                                alt="image"
                                                                                                className="s-shape1"/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-element elementor-element-43f9f55 e-flex e-con-boxed e-con e-child">
                                                                            <div className="e-con-inner">
                                                                                <div className="elementor-element elementor-element-de56cb0 elementor-widget elementor-widget-tp-profile">
                                                                                    <div className="elementor-widget-container">
                                                                                        <div className="profile-card">
                                                                                            <div className="body-socialwrap cmn-box position-relative py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                                                                                <h5
                                                                                                    className="fs-4 s1-color mb-8 fw_500 title-extraclr">
                                                                                                    Social Profile
                                                                                                </h5>
                                                                                                <SocialProfileList/>
                                                                                                <img decoding="async" src="/shapes/s-shape3.png"
                                                                                                    alt="image" className="s-shape1"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-element elementor-element-dbb708c e-flex e-con-boxed e-con e-child">
                                                                    <div className="e-con-inner">
                                                                        <div className="elementor-element elementor-element-57ef5a3 elementor-widget elementor-widget-tp-service">
                                                                            <div className="elementor-widget-container">
                                                                                <div className="cmn-box service-offering py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
                                                                                    <span
                                                                                        className="d-block fs-3 fw-semibold n0-color">
                                                                                        Areas of Interest </span>
                                                                                    <div className="d-flex align-items-center gap-2 mb-6">
                                                                                        <span className="fs-5">
                                                                                            Take a look at some of the things I love working on&nbsp;&nbsp; *•.</span>
                                                                                            <i class="fa-solid fa-person-snowboarding goodthingking-img n0-color fs-4"></i>
                                                                                    </div>
                                                                                    <ul
                                                                                        className="ordering-brand d-flex justify-content-between gap-3 mb-11">
                                                                                        <li>
                                                                                            <a href="ui-ui-design/index.html"
                                                                                                className="text-center">
                                                                                                <span
                                                                                                    className="text-center d-block">
                                                                                                    <img decoding="async"
                                                                                                        src="/shapes/ui.png"
                                                                                                        alt="image"/>
                                                                                                </span>
                                                                                                <span
                                                                                                    className="mt-5 ser-offeringopa d-block">
                                                                                                    UI/UX Design </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="digital-drawing/index.html"
                                                                                                className="text-center">
                                                                                                <span
                                                                                                    className="text-center d-block">
                                                                                                    <img decoding="async"
                                                                                                        src="/shapes/digital.png"
                                                                                                        alt="image"/>
                                                                                                </span>
                                                                                                <span
                                                                                                    className="mt-5 ser-offeringopa d-block">
                                                                                                    Digital Drawing
                                                                                                </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="programming/index.html"
                                                                                                className="text-center">
                                                                                                <span
                                                                                                    className="text-center d-block">
                                                                                                    <img decoding="async"
                                                                                                        src="/shapes/brand.png"
                                                                                                        alt="image"/>
                                                                                                </span>
                                                                                                <span
                                                                                                    className="mt-5 ser-offeringopa d-block">
                                                                                                    Programming </span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="web-development/index.html"
                                                                                                className="text-center">
                                                                                                <span
                                                                                                    className="text-center d-block">
                                                                                                    <img decoding="async" 
                                                                                                        src="/shapes/web.png"
                                                                                                        alt="image"/>
                                                                                                </span>
                                                                                                <span
                                                                                                    className="mt-5 ser-offeringopa d-block">
                                                                                                    Web Development
                                                                                                </span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <ElementFooterLink name="See my Portfolio" redirectTo="/about"/>
                                                                                    <img decoding="async"
                                                                                        src="/shapes/s-shape1.png"
                                                                                        alt="image" className="s-shape1"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-68b59ea e-flex e-con-boxed e-con e-child"
                                                        data-id="68b59ea" 
                                                        data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                                                        <div className="e-con-inner">
                                                            <div className="elementor-element elementor-element-7c5c59f e-con-full e-flex e-con e-child"
                                                                data-id="7c5c59f" 
                                                                data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                                                <div className="elementor-element elementor-element-e755dde elementor-widget elementor-widget-tp-skill"
                                                                    data-id="e755dde" data-element_type="widget"
                                                                    data-widget_type="tp-skill.default">
                                                                    <div className="elementor-widget-container">
                                                                        <div className="skill-box" data-aos="zoom-in-up"
                                                                            data-aos-duration="1400">
                                                                            <div className="repeat-skilltools">
                                                                                <div
                                                                                    className="cmn-box position-relative d-block pb-xl-8 pb-4 pt-xl-8 pt-4">
                                                                                    <span
                                                                                        className="d-block mb-xxl-2 mb-3 fw_500 fs-five n0-color px-xxl-6 px-xl-6 px-lg-4 px-4">
                                                                                        Skills &amp; Tools </span>
                                                                                    <div
                                                                                        className="marquee-wrapper skill-tagslide text-slider">
                                                                                        <div
                                                                                            className="marquee-inner to-left">
                                                                                            <ul
                                                                                                className="marqee-list d-flex">
                                                                                                <li
                                                                                                    className="marquee-item">
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            UI Design
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Product
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Design
                                                                                                            Sprient </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Product
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Workshops
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Interaction
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Mockup
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Product
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            UI Design
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Workshops
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Design
                                                                                                            Sprient </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Product
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Interaction
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            UI Design
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Product
                                                                                                            Design </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            Workshops
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="marquee-wrapper skill-tagslide skill-alllogo text-slider">
                                                                                        <div
                                                                                            className="marquee-inner to-right">
                                                                                            <ul
                                                                                                className="marqee-list d-flex">
                                                                                                <li
                                                                                                    className="marquee-item">
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M6.66406 2.66602L25.3307 21.3327H6.66406V11.9993H25.3307V2.66602H6.66406Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.9974 21.334V29.334L6.66406 21.334H15.9974Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M6.66406 2.66602L25.3307 21.3327H6.66406V11.9993H25.3307V2.66602H6.66406Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.9974 21.334V29.334L6.66406 21.334H15.9974Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M6.66406 2.66602L25.3307 21.3327H6.66406V11.9993H25.3307V2.66602H6.66406Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.9974 21.334V29.334L6.66406 21.334H15.9974Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 21.3327V10.666H12.6667C14.1333 10.666 15.3333 11.866 15.3333 13.3327C15.3333 14.7993 14.1333 15.9993 12.6667 15.9993H10"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.9974 14.666H20.2641C19.3307 14.666 18.6641 15.466 18.6641 16.266C18.6641 17.1993 19.4641 17.866 20.2641 17.866C21.1974 17.866 21.8641 18.666 21.8641 19.466C21.8641 20.3993 21.0641 21.066 20.2641 21.066H18.6641"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M8.92969 21.3327L13.5964 10.666L18.3964 21.3327"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M10 17.7324H17.2"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7344 21.3342V14.2676"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M21.7891 10.7129V10.7129"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="2"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                    <span
                                                                                                        className="text-slider">
                                                                                                        <a
                                                                                                            className="design-tag">
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                                                width="32"
                                                                                                                height="32"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                fill="none">
                                                                                                                <path
                                                                                                                    d="M19.9974 29.3327H11.9974C5.33073 29.3327 2.66406 26.666 2.66406 19.9993V11.9993C2.66406 5.33268 5.33073 2.66602 11.9974 2.66602H19.9974C26.6641 2.66602 29.3307 5.33268 29.3307 11.9993V19.9993C29.3307 26.666 26.6641 29.3327 19.9974 29.3327Z"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M24.0031 11.334V20.8007H21.6031C20.2698 20.8007 19.2031 19.734 19.2031 18.4007C19.2031 17.0673 20.2698 16.0007 21.6031 16.0007H24.0031"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M8 11.334L15.6 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                                <path
                                                                                                                    d="M15.6 11.334L8 20.6673"
                                                                                                                    stroke="#0A090D"
                                                                                                                    strokeWidth="1.5"
                                                                                                                    stroke-miterlimit="10"
                                                                                                                    strokeLinecap="round"
                                                                                                                    stroke-linejoin="round">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-60af753 e-con-full e-flex e-con e-child"
                                                                data-id="60af753" 
                                                                data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                                                <div className="elementor-element elementor-element-573d08d elementor-widget elementor-widget-tp-workwith"
                                                                    data-id="573d08d" data-element_type="widget"
                                                                    data-widget_type="tp-workwith.default">
                                                                    <div className="elementor-widget-container">
                                                                        <a href="contact/index.html"
                                                                            className="common-serbox d-block cmn-box py-xxl-6 py-xl-6 py-lg-4 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4"
                                                                            data-aos="fade-up" data-aos-duration="1000">
                                                                            <span
                                                                                className="d-block mb-xxl-15 mb-18 fw_500 fs-five n0-color work-respon">
                                                                                Work with <span
                                                                                    className="d-block fw_500 fs-five n0-color ms-8">
                                                                                    Gole Layla...!</span>
                                                                            </span>
                                                                            <span
                                                                                className="cmn-svg d-flex cmn-footarrow align-items-center justify-content-between">
                                                                                <span className="fw_500 fs-seven n0-color">
                                                                                    Get In Touch </span>
                                                                                <svg width="58" height="40"
                                                                                    viewBox="0 0 58 40" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                                                        fill="white" />
                                                                                    <path
                                                                                        d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                                                        fill="white" />
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-resume-outer e-con-full e-flex e-con e-child">
                                                    <div className="elementor-element elementor-element-middle e-con-full e-flex e-con e-child">
                                                        <div className="elementor-element elementor-element-resume-inner elementor-widget elementor-widget-tp-marque">
                                                            <div className="elementor-widget-container">
                                                                <div className="cmn-box feature-box freature-boxone position-relative py-xxl-6 py-xl-6 py-lg-6 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6 flex">
                                                                    <div class="w-4/5">
                                                                        <span className="fs-6 fw-semibold n0-color">Here &apos;s my Résumé, in case... </span>
                                                                    </div>
                                                                    <div class="w-1/4">
                                                                        <i class="fa-solid fa-cloud-arrow-down n0-color"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-e6d7831 e-con-full e-flex e-con e-child">
                                                        <div className="elementor-element elementor-element-32efc2c elementor-widget elementor-widget-tp-ex">
                                                            <div className="elementor-widget-container">
                                                                <div className="experience-box">
                                                                    <div
                                                                        className="expri-box cmn-box d-grid position-relative pt-xxl-7 pt-6 pb-xxl-9 pb-6 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                                                        <div className="expri-items-box mb-xxl-7 mb-xl-10 mb-lg-10 mb-md-8 mb-sm-3 text-center d-flex align-items-center justify-content-center"
                                                                            data-aos="fade-up" data-aos-duration="1000">
                                                                            <div>
                                                                                <h2 className="fw_600 n0-color mb-2">
                                                                                    06
                                                                                </h2>
                                                                                <span
                                                                                    className="expri-clr text-uppercase n00-color fw_300 fs-six">
                                                                                    YEARS EXPERIENCE </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="expri-items-box mb-xxl-8 mb-xl-11 mb-lg-11 mb-md-8 mb-sm-2 text-center d-flex align-items-center justify-content-center"
                                                                            data-aos="zoom-in-down"
                                                                            data-aos-duration="1200">
                                                                            <div>
                                                                                <h2 className="fw_600 n0-color mb-2">
                                                                                    +145
                                                                                </h2>
                                                                                <span
                                                                                    className="expri-clr text-uppercase n00-color fw_300 fs-six">
                                                                                    TOTAL PROJECTS </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="expri-items-box text-center d-flex align-items-center justify-content-center"
                                                                            data-aos="fade-up" data-aos-duration="1000">
                                                                            <div>
                                                                                <h2 className="fw_600 n0-color mb-2">
                                                                                    +129
                                                                                </h2>
                                                                                <span
                                                                                    className="expri-clr text-uppercase n00-color fw_300 fs-six">
                                                                                    CLENTS WORLDWIBE </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-a94b248 e-con-full e-flex e-con e-child"
                                                            data-id="a94b248" 
                                                            data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                                            <div className="elementor-element elementor-element-e705f63 elementor-widget elementor-widget-tp-work"
                                                                data-id="e705f63" data-element_type="widget"
                                                                data-widget_type="tp-work.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="work-box" data-aos="zoom-in-up"
                                                                        data-aos-duration="1400">
                                                                        <a href="work/index.html"
                                                                            className="cmn-box position-relative d-block pb-xxl-8 pb-xl-6 pb-lg-5 pb-5 pt-xxl-8 pt-xl-6 pt-lg-5 pt-5 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                                                            <span
                                                                                className="d-block mb-xxl-5 mb-4 fw_500 fs-five n0-color">
                                                                                See My <span
                                                                                    className="d-block fw_500 fs-five n0-color ms-8">
                                                                                    Latest Works </span>
                                                                            </span>
                                                                            <span
                                                                                className="work-thumb mb-4 m-auto text-center all-proje199s">
                                                                                <img decoding="async"
                                                                                    src="/shapes/latest-work1.png"
                                                                                    alt="image" className="radius12"/>
                                                                            </span>
                                                                            <span
                                                                                className="d-flex cmn-footarrow align-items-center justify-content-between all-proje-1199">
                                                                                <span className="fw_500 fs-seven n0-color">
                                                                                    All Projects </span>
                                                                                <span className="cmn-svg40">
                                                                                    <svg width="58" height="40"
                                                                                        viewBox="0 0 58 40" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                                                            fill="white" />
                                                                                        <path
                                                                                            d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                                                            fill="white" />
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                            <span className="latest-shape">
                                                                                <svg width="68" height="60"
                                                                                    viewBox="0 0 68 60" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <g opacity="0.2">
                                                                                        <path
                                                                                            d="M48.8807 34.3435C46.2623 34.5858 44.0337 34.8808 42.137 35.3041C39.0157 36.0007 36.7345 37.0566 35.0755 38.8489C33.4209 40.6365 32.4412 43.097 31.7934 46.484C31.4013 48.5346 31.127 50.9477 30.9044 53.7894C30.6817 50.9478 30.4071 48.535 30.0147 46.4846C29.3664 43.0978 28.3861 40.6378 26.731 38.8505C25.0717 37.0585 22.7903 36.0028 19.6694 35.306C17.7732 34.8826 15.5454 34.5874 12.9283 34.3447C15.5467 34.1023 17.7753 33.8073 19.672 33.384C22.7933 32.6874 25.0745 31.6315 26.7335 29.8392C28.3881 28.0516 29.3679 25.5912 30.0156 22.2041C30.4077 20.1535 30.682 17.7405 30.9046 14.8987C31.1273 17.7403 31.4019 20.1532 31.7944 22.2036C32.4426 25.5903 33.423 28.0503 35.078 29.8377C36.7373 31.6296 39.0187 32.6853 42.1396 33.3821C44.0359 33.8055 46.2636 34.1007 48.8807 34.3435Z"
                                                                                            stroke="white" />
                                                                                        <path
                                                                                            d="M54.8418 21.4667C54.727 22.0658 54.6298 22.7181 54.5453 23.4283C54.4609 22.7189 54.3639 22.0672 54.2494 21.4687C53.8773 19.5246 53.3092 18.0788 52.328 17.0187C51.3425 15.954 49.9967 15.3388 48.1985 14.9372C47.6081 14.8054 46.9626 14.6953 46.2574 14.6C46.9615 14.5049 47.606 14.3951 48.1957 14.2635C49.9936 13.8623 51.3396 13.2475 52.3255 12.1831C53.3071 11.1234 53.8759 9.67765 54.2485 7.73333C54.3633 7.13424 54.4604 6.4819 54.545 5.77174C54.6294 6.48112 54.7263 7.1328 54.8409 7.73136C55.2129 9.67541 55.7811 11.1213 56.7622 12.1813C57.7477 13.246 59.0936 13.8613 60.8918 14.2628C61.4822 14.3947 62.1277 14.5048 62.8329 14.6C62.1288 14.6951 61.4842 14.805 60.8946 14.9366C59.0967 15.3378 57.7507 15.9526 56.7648 17.017C55.7832 18.0767 55.2144 19.5224 54.8418 21.4667Z"
                                                                                            stroke="white" />
                                                                                        <path
                                                                                            d="M6.99795 13.7049C7.62228 13.0308 7.97733 12.1259 8.2078 10.9523C8.43826 12.1259 8.79332 13.0308 9.41765 13.7049C10.0564 14.3947 10.9206 14.7825 12.0371 15.0317C12.0597 15.0367 12.0824 15.0417 12.1052 15.0466C12.0824 15.0516 12.0597 15.0566 12.0371 15.0616C10.9206 15.3108 10.0564 15.6986 9.41765 16.3883C8.79332 17.0625 8.43826 17.9674 8.2078 19.141C7.97733 17.9674 7.62228 17.0625 6.99795 16.3883C6.35918 15.6986 5.49496 15.3108 4.37847 15.0616C4.3559 15.0566 4.33321 15.0516 4.31039 15.0466C4.33321 15.0417 4.3559 15.0367 4.37847 15.0317C5.49496 14.7825 6.35918 14.3947 6.99795 13.7049Z"
                                                                                            stroke="white" />
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Home.pageProps = {
    title: "Home Me",
};
