import Link from "next/link";
import { userData } from "../../utils/pageData";
import { vollkorn, kanit } from "../../utils/fonts";

import ElementFooterLink from "../../components/ElementFooterLink";
import SocialProfileList from "../../components/SocialProfileList";
import InterestAreaBlock from "../../components/InterestAreaBlock";
import ExperienceHomePageBlock from "../../components/ExperienceHomePageBlock";

export default function Home() {
    return (
        <section
            className={`body-box body-box1 position-relative cus-z-1 pb-xxl-20 pb-xl-15 pb-lg-10 pb-9 my-5 ${vollkorn.className}`}
        >
            <div className="mw-92 container">
                <div className="row g-xxl-6 g-4">
                    <div className="col-lg-9">
                        <div className="row g-xxl-6 g-4 mb-4 justify-content-center">
                            <div className="col-lg-4">
                                <div
                                    className="lyla-box1 cmn-box mb-4 py-4 px-6 aos-init aos-animate"
                                    data-aos="zoom-in-down"
                                    data-aos-duration="1500"
                                >
                                    <div
                                        className="justify-center flex layla-thumb layla-thumbtwo text-center m-auto my-4"
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                    >
                                        <img
                                            decoding="async"
                                            src="/profile.webp"
                                            alt="image"
                                            className="intro-profile-pic radius100"
                                        />
                                        <div className="textcircle">
                                            <div className="text">
                                                <p>
                                                    Code & Canvas: A Showcase of
                                                    My Work •
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link
                                            href="/"
                                            className="w-100 cmn-btn text-center justify-content-center gap-2 d-inline-flex align-items-center mt-4 mb-3 py-2 px-4"
                                        >
                                            <span className="fs-5 n0-color">
                                                I’m {userData.name}{" "}
                                            </span>
                                            <i class="icon fa-regular fa-hand-peace"></i>
                                        </Link>
                                    </div>
                                    <p
                                        class={`fs-6 text-center text-xxl-start my-4 n0-color aos-init aos-animate ${kanit.className}`}
                                        data-aos="fade-down"
                                        data-aos-duration="1200"
                                    >
                                        Versatile team player skilled in Analytics, MLOps, and Software Development, adeptly offering comprehensive expertise across a range of diverse technical domains.
                                    </p>
                                    <ElementFooterLink
                                        name="The Scoop on Me"
                                        redirectTo="/about"
                                    />
                                </div>
                                <div>
                                    <a
                                        href="article/index.html"
                                        className="common-serbox d-block cmn-box py-xxl-6 py-xl-6 py-lg-4 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <span className="d-block mb-xxl-19 mb-14 fw_500 fs-five n0-color">
                                            Articles &amp;{" "}
                                            <span className="d-block fw_500 fs-five n0-color ms-8">
                                                Publications
                                            </span>
                                        </span>
                                        <span className="cmn-svg d-flex cmn-footarrow align-items-center justify-content-between">
                                            <span className="fw_500 fs-seven n0-color">
                                                All Blog
                                            </span>
                                            <svg
                                                width="58"
                                                height="40"
                                                viewBox="0 0 58 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <img
                                            decoding="async"
                                            src="/shapes/s-shape3.png"
                                            alt="image"
                                            className="s-shape3"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row g-xxl-6 g-4 mb-4">
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-6 aos-init aos-animate"
                                        data-aos="zoom-in-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="cmn-box py-4 px-6">
                                            <h5 className="fs-4 s1-color mb-2 fw_500 title-extraclr">
                                                Title
                                            </h5>
                                            <h3
                                                className={`titles-designer aos-init aos-animate ${kanit.className}`}
                                                data-aos="fade-down"
                                                data-aos-duration="1500"
                                            >
                                                <a
                                                    href="javascript:void(0)"
                                                    className="fs-1 line-height-3rem fw-semibold n1-color"
                                                >
                                                    {userData.introTitle}
                                                </a>
                                            </h3>
                                            <img
                                                decoding="async"
                                                src="/shapes/s-shape1.png"
                                                alt="image"
                                                className="s-shape1"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-6 aos-init aos-animate"
                                        data-aos="zoom-in-down"
                                        data-aos-duration="1500"
                                    >
                                        <div className="body-socialwrap cmn-box py-4 px-6">
                                            <h5 className="fs-4 s1-color mb-2 fw_500 title-extraclr">
                                                Social Profile
                                            </h5>
                                            <SocialProfileList />
                                            <img
                                                decoding="async"
                                                src="/shapes/s-shape3.png"
                                                alt="image"
                                                className="s-shape1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cmn-box service-offering py-4 px-6">
                                        <span className="d-block fs-3 fw-semibold n0-color">
                                            Areas of Interest{" "}
                                        </span>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <span className="fs-seven">
                                                Take a look at some of the
                                                things I love working
                                                on&nbsp;&nbsp; *•.
                                            </span>
                                            <i class="fa-solid fa-person-snowboarding goodthingking-img n0-color fs-5"></i>
                                        </div>
                                        <InterestAreaBlock></InterestAreaBlock>
                                        <ElementFooterLink
                                            name="See my Portfolio"
                                            redirectTo="/about"
                                        />
                                        <img
                                            decoding="async"
                                            src="/shapes/s-shape1.png"
                                            alt="image"
                                            className="s-shape1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-xxl-6 g-4">
                            <div
                                class="col-lg-8 col-md-8 col-sm-6"
                                data-aos="fade-down"
                                data-aos-duration="1500"
                            >
                                <div class="repeat-skilltools">
                                    <div class="cmn-box position-relative d-block pb-xl-8 pb-4 pt-xl-8 pt-4">
                                        <span class="d-block mb-xxl-2 mb-3 fw_500 fs-five n0-color px-xxl-6 px-xl-6 px-lg-4 px-4">
                                            Skills & Tools
                                        </span>
                                        <div class="marquee-wrapper skill-tagslide text-slider">
                                            <div class="marquee-inner to-left">
                                                <ul class="marqee-list d-flex">
                                                    <li class="marquee-item">
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                UI Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Product Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Workshops
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Design Sprient
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Workshops
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Design Sprient
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Interaction
                                                                Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Mockup Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Interaction
                                                                Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Mockup Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                UI Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Product Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                UI Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Product Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Workshops
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Design Sprient
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Workshops
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Design Sprient
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Interaction
                                                                Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Mockup Design
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                Interaction
                                                                Design
                                                            </span>
                                                        </span>{" "}
                                                        <span class="text-slider">
                                                            {" "}
                                                            <span class="design-tag">
                                                                Mockup Design
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="marquee-wrapper skill-tagslide skill-alllogo text-slider">
                                            <div class="marquee-inner to-right">
                                                <ul class="marqee-list d-flex">
                                                    <li class="marquee-item">
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 21.3346V10.668H12.6667C14.1333 10.668 15.3333 11.868 15.3333 13.3346C15.3333 14.8013 14.1333 16.0013 12.6667 16.0013H10"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.9974 14.668H20.2641C19.3307 14.668 18.6641 15.468 18.6641 16.268C18.6641 17.2013 19.4641 17.868 20.2641 17.868C21.1974 17.868 21.8641 18.668 21.8641 19.468C21.8641 20.4013 21.0641 21.068 20.2641 21.068H18.6641"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.92969 21.3346L13.5964 10.668L18.3964 21.3346"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10 17.7344H17.2"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M21.7344 21.3323V14.2656"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21.7891 10.7109V10.7109"
                                                                        stroke="#9747FF"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.9974 29.3346H11.9974C5.33073 29.3346 2.66406 26.668 2.66406 20.0013V12.0013C2.66406 5.33464 5.33073 2.66797 11.9974 2.66797H19.9974C26.6641 2.66797 29.3307 5.33464 29.3307 12.0013V20.0013C29.3307 26.668 26.6641 29.3346 19.9974 29.3346Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M24.0031 11.332V20.7987H21.6031C20.2698 20.7987 19.2031 19.732 19.2031 18.3987C19.2031 17.0654 20.2698 15.9987 21.6031 15.9987H24.0031"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M8 11.332L15.6 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.6 11.332L8 20.6654"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.0036 2.66797H11.6036C9.07031 2.66797 7.07031 4.66797 7.07031 7.06797C7.07031 9.46797 9.07031 11.468 11.4703 11.468H16.0036V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 11.6016H11.6031C9.20312 11.6016 7.20312 13.6016 7.20312 16.0016C7.20312 18.4016 9.20312 20.4016 11.6031 20.4016H16.0031V11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16.0031 20.3984H11.6031C9.20312 20.3984 7.20312 22.3984 7.20312 24.7984C7.20312 27.1984 9.20312 29.1984 11.6031 29.1984C14.0031 29.1984 16.0031 27.1984 16.0031 24.7984V20.3984Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M16 2.66797H20.4C22.8 2.66797 24.8 4.66797 24.8 7.06797C24.8 9.46797 22.8 11.468 20.4 11.468H16V2.66797Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M20.4 11.6016C22.8 11.6016 24.8 13.6016 24.8 16.0016C24.8 18.4016 22.8 20.4016 20.4 20.4016C18 20.4016 16 18.4016 16 16.0016C16 13.6016 18 11.6016 20.4 11.6016Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.66406 2.66797L25.3307 21.3346H6.66406V12.0013H25.3307V2.66797H6.66406Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15.9974 21.332V29.332L6.66406 21.332H15.9974Z"
                                                                        stroke="#9747FF"
                                                                        stroke-width="1.5"
                                                                        stroke-miterlimit="10"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span class="text-slider">
                                                            <span class="design-tag">
                                                                <svg
                                                                    width="25"
                                                                    height="26"
                                                                    viewBox="0 0 25 26"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.75938 23.1356C4.75855 17.6452 4.75855 12.0817 4.75938 6.44499C4.75938 6.34249 4.78626 6.24478 4.84001 6.15187C5.00251 5.87124 5.22438 5.82124 5.53938 5.79624C9.84313 5.45082 14.1469 5.10478 18.4506 4.75812C18.9444 4.71812 19.2925 5.23312 19.0969 5.69124C18.996 5.92791 18.8065 6.0577 18.5281 6.08062C14.6615 6.39728 10.5269 6.73436 6.12438 7.09187C6.10271 7.09353 6.09188 7.1052 6.09188 7.12686C6.09105 12.9719 6.09063 18.9348 6.09063 25.0156C6.09063 25.3487 5.82001 25.6212 5.50251 25.6575C5.26084 25.685 5.05855 25.6035 4.89563 25.4131C3.4173 23.6885 1.93771 21.965 0.456881 20.2425C0.375006 20.1475 0.327506 19.9519 0.328131 19.8194C0.330631 14.0323 0.331256 8.25937 0.330006 2.50062C0.330006 2.10624 0.591881 1.82499 0.965006 1.79249C6.49459 1.30916 11.9717 0.823324 17.3963 0.33499C17.5479 0.32124 17.6863 0.355407 17.8113 0.43749C20.0325 1.89874 22.1054 3.26249 24.03 4.52874C24.2181 4.65249 24.3219 4.85562 24.3281 5.06937C24.3302 5.1377 24.3306 11.4514 24.3294 24.0106C24.3294 24.2973 24.2165 24.5004 23.9906 24.62C23.881 24.6783 23.7092 24.7154 23.475 24.7312C19.0838 25.0333 14.6506 25.3433 10.1756 25.6612C9.77813 25.6894 9.40063 25.4456 9.40063 25.0206C9.39813 20.381 9.39771 15.4885 9.39938 10.3431C9.40001 9.93249 9.71688 9.69749 10.0963 9.66812C10.4279 9.64228 10.7517 9.61207 11.0675 9.57749C11.3456 9.54687 11.6175 9.65562 11.7575 9.89874C13.7192 13.2954 15.6598 16.6571 17.5794 19.9837C17.5923 20.0062 17.6117 20.016 17.6375 20.0131L17.7831 19.9969C17.811 19.9935 17.825 19.9779 17.825 19.95C17.825 16.6883 17.8248 13.3504 17.8244 9.93624C17.8244 9.22999 18.7656 8.97937 19.0906 9.63187C19.1344 9.71895 19.1563 9.81374 19.1563 9.91624C19.1558 13.3858 19.1554 16.9475 19.155 20.6012C19.155 20.9744 18.8625 21.23 18.5081 21.2631C18.1298 21.2989 17.7496 21.3394 17.3675 21.3844C17.0719 21.4187 16.8075 21.3125 16.6563 21.0506C14.7188 17.6948 12.7942 14.3608 10.8825 11.0487C10.7817 10.8746 10.7313 10.8881 10.7313 11.0894V24.2587C10.7312 24.262 10.7319 24.2653 10.7333 24.2683C10.7346 24.2713 10.7366 24.274 10.739 24.2762C10.7415 24.2785 10.7444 24.2802 10.7476 24.2812C10.7508 24.2823 10.7541 24.2827 10.7575 24.2825L22.965 23.4269C22.9867 23.4252 22.9975 23.4135 22.9975 23.3919V5.48312C22.9975 5.45812 22.9869 5.43853 22.9656 5.42437L17.3 1.69687C17.2871 1.68837 17.2716 1.68462 17.2563 1.68624L1.68501 3.07187C1.67209 3.07312 1.66563 3.0802 1.66563 3.09312V19.5762C1.66563 19.5942 1.67146 19.6098 1.68313 19.6231L4.71626 23.1519C4.74501 23.1852 4.75938 23.1798 4.75938 23.1356Z"
                                                                        fill="#9747FF"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-4 col-md-4 col-sm-6"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <a
                                    href="contact.html"
                                    class="common-serbox d-block cmn-box py-xl-8 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4"
                                >
                                    <span class="d-block mb-xxl-15 mb-18 fw_500 fs-five n0-color work-respon">
                                        Work with
                                        <span class="d-block fw_500 fs-five n0-color ms-8">
                                            {" "}
                                            Gole Layla...!
                                        </span>
                                    </span>
                                    <span class="d-flex cmn-footarrow get-respons-1199 align-items-center justify-content-between">
                                        <span class="fw_500 fs-seven n0-color">
                                            Get In Touch
                                        </span>
                                        <svg
                                            width="58"
                                            height="40"
                                            viewBox="0 0 58 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                    <img
                                        src="assets/images/global/s-shape2.png"
                                        alt="img"
                                        class="s-shape2"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row g-xxl-6 g-4">
                            <div className="col-lg-12">
                                <div
                                    className="cmn-box feature-box freature-boxone gap-2 py-4 px-6 flex aos-init aos-animate"
                                    data-aos="flip-up"
                                    data-aos-duration="1000"
                                >
                                    <div class="w-4/5">
                                        <span className="fs-5 fw-semibold n0-color">
                                            Here&apos;s my Resume,&nbsp; in
                                            case...
                                        </span>
                                    </div>
                                    <div class="w-1/5 py-2">
                                        <Link
                                            href="/about"
                                            className="cv-dl-wrapper"
                                        >
                                            <i class="fs-1 fa-regular fa-circle-down"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-100 col-lg-12 col-md-6 col-sm-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div class="expri-box cmn-box d-grid position-relative pt-xxl-7 pt-6 pb-xxl-9 pb-6 px-xxl-8 px-xl-6 px-lg-4 px-4">
                                        <h5 className="fs-4 s1-color mb-2 fw_500 title-extraclr">
                                            Work Experience
                                        </h5>
                                    {/* <div
                                        class="expri-items-box text-center d-flex align-items-center justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <div>
                                            <h2 class="fw_600 n0-color mb-2">
                                                +129
                                            </h2>
                                            <span class="expri-clr text-uppercase n00-color fw_300 fs-six">
                                                CLENTS WORLDWIBE
                                            </span>
                                        </div>
                                    </div> */}

                                    <ExperienceHomePageBlock></ExperienceHomePageBlock>
                                    <ElementFooterLink
                                        name="Dig the Deets"
                                        redirectTo="/about"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-6">
                                <a
                                    href="project.html"
                                    class="cmn-box position-relative d-block pb-xxl-8 pb-xl-6 pb-lg-5 pb-5 pt-xxl-8 pt-xl-6 pt-lg-5 pt-5 px-xxl-8 px-xl-6 px-lg-4 px-4"
                                >
                                    <span class="d-block mb-xxl-5 mb-4 fw_500 fs-five n0-color">
                                        See My
                                        <span class="d-block fw_500 fs-five n0-color ms-8">
                                            Latest Works
                                        </span>
                                    </span>
                                    <span
                                        class="work-thumb mb-4 m-auto text-center all-proje199s"
                                        data-aos="zoom-in-up"
                                        data-aos-duration="1200"
                                    >
                                        <img
                                            src="assets/images/banner/latest-work1.png"
                                            alt="img"
                                            class="radius12"
                                        />
                                    </span>
                                    <span
                                        class="d-flex cmn-footarrow align-items-center justify-content-between all-proje-1199"
                                        data-aos="zoom-in-up"
                                        data-aos-duration="1400"
                                    >
                                        <span class="fw_500 fs-seven n0-color">
                                            All Projects
                                        </span>
                                        <span class="cmn-svg40">
                                            <svg
                                                width="58"
                                                height="40"
                                                viewBox="0 0 58 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="latest-shape">
                                        <svg
                                            width="68"
                                            height="60"
                                            viewBox="0 0 68 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.2">
                                                <path
                                                    d="M48.8807 34.3435C46.2623 34.5858 44.0337 34.8808 42.137 35.3041C39.0157 36.0007 36.7345 37.0566 35.0755 38.8489C33.4209 40.6365 32.4412 43.097 31.7934 46.484C31.4013 48.5346 31.127 50.9477 30.9044 53.7894C30.6817 50.9478 30.4071 48.535 30.0147 46.4846C29.3664 43.0978 28.3861 40.6378 26.731 38.8505C25.0717 37.0585 22.7903 36.0028 19.6694 35.306C17.7732 34.8826 15.5454 34.5874 12.9283 34.3447C15.5467 34.1023 17.7753 33.8073 19.672 33.384C22.7933 32.6874 25.0745 31.6315 26.7335 29.8392C28.3881 28.0516 29.3679 25.5912 30.0156 22.2041C30.4077 20.1535 30.682 17.7405 30.9046 14.8987C31.1273 17.7403 31.4019 20.1532 31.7944 22.2036C32.4426 25.5903 33.423 28.0503 35.078 29.8377C36.7373 31.6296 39.0187 32.6853 42.1396 33.3821C44.0359 33.8055 46.2636 34.1007 48.8807 34.3435Z"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M54.8418 21.4667C54.727 22.0658 54.6298 22.7181 54.5453 23.4283C54.4609 22.7189 54.3639 22.0672 54.2494 21.4687C53.8773 19.5246 53.3092 18.0788 52.328 17.0187C51.3425 15.954 49.9967 15.3388 48.1985 14.9372C47.6081 14.8054 46.9626 14.6953 46.2574 14.6C46.9615 14.5049 47.606 14.3951 48.1957 14.2635C49.9936 13.8623 51.3396 13.2475 52.3255 12.1831C53.3071 11.1234 53.8759 9.67765 54.2485 7.73333C54.3633 7.13424 54.4604 6.4819 54.545 5.77174C54.6294 6.48112 54.7263 7.1328 54.8409 7.73136C55.2129 9.67541 55.7811 11.1213 56.7622 12.1813C57.7477 13.246 59.0936 13.8613 60.8918 14.2628C61.4822 14.3947 62.1277 14.5048 62.8329 14.6C62.1288 14.6951 61.4842 14.805 60.8946 14.9366C59.0967 15.3378 57.7507 15.9526 56.7648 17.017C55.7832 18.0767 55.2144 19.5224 54.8418 21.4667Z"
                                                    stroke="white"
                                                />
                                                <path
                                                    d="M6.99795 13.7049C7.62228 13.0308 7.97733 12.1259 8.2078 10.9523C8.43826 12.1259 8.79332 13.0308 9.41765 13.7049C10.0564 14.3947 10.9206 14.7825 12.0371 15.0317C12.0597 15.0367 12.0824 15.0417 12.1052 15.0466C12.0824 15.0516 12.0597 15.0566 12.0371 15.0616C10.9206 15.3108 10.0564 15.6986 9.41765 16.3883C8.79332 17.0625 8.43826 17.9674 8.2078 19.141C7.97733 17.9674 7.62228 17.0625 6.99795 16.3883C6.35918 15.6986 5.49496 15.3108 4.37847 15.0616C4.3559 15.0566 4.33321 15.0516 4.31039 15.0466C4.33321 15.0417 4.3559 15.0367 4.37847 15.0317C5.49496 14.7825 6.35918 14.3947 6.99795 13.7049Z"
                                                    stroke="white"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Home.pageProps = {
    title: "About Me",
};
