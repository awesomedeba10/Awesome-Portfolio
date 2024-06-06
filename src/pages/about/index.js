import Link from "next/link";
import { useEffect } from "react";

import { userData } from "../../utils/pageData";
import { vollkorn, kanit } from "../../utils/fonts";

import initHomeImports from "../../utils/imports/homeInit";

import ElementFooterLink from "../../components/ElementFooterLink";
import SocialProfileList from "../../components/SocialProfileList";
import InterestAreaBlock from "../../components/InterestAreaBlock";
import ExperienceHomePageBlock from "../../components/ExperienceHomePageBlock";

export default function Home() {
	useEffect(() => {
		// initHomeImports();
	}, []);

	return (
		<section
			className={`body-box body-box1 position-relative cus-z-1 mt-5 ${vollkorn.className}`}
		>
			<div className="mw-92 container">
				<div className="row mb-xxl-6 mb-4 flex-row-reverse justify-content-center g-xxl-6 g-4">
					<div
						className="col-lg-3 col-md-5 col-sm-8 aos-init aos-animate"
						data-aos="zoom-in-up"
						data-aos-duration="1000"
					>
						<div
							className="cmn-box py-xxl-9 py-xl-9 py-lg-9 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6 aos-init aos-animate"
							data-aos="zoom-in-down"
							data-aos-duration="2000"
						>
							<div className="justify-center flex layla-thumb position-relative about-layla m-auto text-center">
								<img
									src="/profile.webp"
									alt="img"
									className="radius100"
								/>
								<div className="layla-resize">
									<img src="/shapes/img-resize.png" alt="img" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div
							className="cmn-box py-4 px-6 aos-init aos-animate"
							data-aos="zoom-in-down"
							data-aos-duration="1400"
						>
							<img
								src="/shapes/ring2.png"
								alt="img"
								className="s-shape2"
							/>
							<div className="layla-infoabout text-center">
								<h4 className={`text-white mb-md-6 mb-4 fw_500 ${kanit.className}`}>
									<span className="d-block">Hello,</span>
									I’m {userData.name}
								</h4>
								<p>{userData.shortIntro}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row g-xxl-6 g-4 mb-xxl-6 mb-4">
					<div
						className="col-xl-4 col-lg-6 col-md-6 aos-init aos-animate"
						data-aos="fade-down"
						data-aos-duration="1200"
					>
						<div className="cmn-box h-100 py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
							<div className="d-flex align-items-center justify-content-between mb-10">
								<h5 className="fw_500 n0-color">My Experience</h5>
								<a
									href="assets/images/banner/layla-wife.png"
									type="button"
									className="exprience-download"
									download=""
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9.32031 11.6797L11.8803 14.2397L14.4403 11.6797"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
										<path
											d="M11.8828 4V14.17"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
										<path
											d="M20 12.1797C20 16.5997 17 20.1797 12 20.1797C7 20.1797 4 16.5997 4 12.1797"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</a>
							</div>
							<ul className="about-expritext">
								<li>
									<span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 7L12 12L7 17M13 7L18 12L13 17"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07">2021 // Now</span>
									<span className="n07 nameta">UI Designer</span>
									<span className="n07 nameta">Apple</span>
								</li>
								<li>
									<span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 7L12 12L7 17M13 7L18 12L13 17"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07">2015 // 2020</span>
									<span className="n07 nameta">Front-end Dev</span>
									<span className="n07 nameta">Google</span>
								</li>
								<li>
									<span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 7L12 12L7 17M13 7L18 12L13 17"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07">2010 // 2015</span>
									<span className="n07 nameta">UI/UX Designer</span>
									<span className="n07 nameta">Intel</span>
								</li>
							</ul>
						</div>
					</div>
					<div
						className="col-xl-3 col-lg-6 col-md-6 aos-init aos-animate"
						data-aos="fade-up"
						data-aos-duration="1400"
					>
						<div className="cmn-box h-100 py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
							<h5 className="fw_500 n0-color mb-10">What I do</h5>
							<ul className="about-expritext about-expritext-two">
								<li>
									<span>
										<svg
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07 fs-six fw_300">Branding</span>
								</li>
								<li>
									<span>
										<svg
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07 fs-six fw_300">Illustration</span>
								</li>
								<li>
									<span>
										<svg
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07 fs-six fw_300">Logo Design</span>
								</li>
								<li>
									<span>
										<svg
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.00056 6.5L6.88856 6.506C6.71073 6.52594 6.54151 6.59323 6.39855 6.70086C6.25559 6.80848 6.14413 6.95249 6.0758 7.11787C6.00746 7.28325 5.98475 7.46394 6.01004 7.64108C6.03532 7.81823 6.10768 7.98535 6.21956 8.125L9.72056 12.5L6.22056 16.875C6.10284 17.022 6.02904 17.1993 6.00765 17.3864C5.98626 17.5736 6.01816 17.7629 6.09966 17.9327C6.18116 18.1025 6.30896 18.2459 6.46835 18.3462C6.62773 18.4466 6.81221 18.4999 7.00056 18.5H13.0006C13.1504 18.4999 13.2982 18.4662 13.4332 18.4013C13.5682 18.3363 13.6869 18.2419 13.7806 18.125L17.7806 13.125C17.9226 12.9476 17.9999 12.7272 17.9999 12.5C17.9999 12.2728 17.9226 12.0524 17.7806 11.875L13.7806 6.875C13.6869 6.75806 13.5682 6.66365 13.4332 6.59875C13.2982 6.53384 13.1504 6.50009 13.0006 6.5H7.00056Z"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</span>
									<span className="n07 fs-six fw_300">Typography</span>
								</li>
							</ul>
							<img
								src="assets/images/global/s-shape1rotate.png"
								alt="img"
								className="s-shape2rotate"
							/>
							<img
								src="assets/images/global/s-shape3.png"
								alt="img"
								className="s-shape3"
							/>
						</div>
					</div>
					<div
						className="col-xl-5 aos-init aos-animate"
						data-aos="fade-down"
						data-aos-duration="1800"
					>
						<div className="cmn-box h-100 about-countexprience-wrap py-xxl-8 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
							<div className="expri-items-box about-items-counter">
								<h2 className="fw_600 n0-color mb-2">07+</h2>
								<span className="expri-clr text-uppercase n00-color fw_300 fs-six">
									YEARS OF EXPERIENCE
								</span>
							</div>
							<div className="expri-items-box about-items-counter">
								<h2 className="fw_600 n0-color mb-2">+125</h2>
								<span className="expri-clr text-uppercase n00-color fw_300 fs-six">
									TOTAL PROJECTS
								</span>
							</div>
							<div className="expri-items-box about-items-counter">
								<h2 className="fw_600 n0-color mb-2">09</h2>
								<span className="expri-clr text-uppercase n00-color fw_300 fs-six">
									RECOGNITIONS
								</span>
							</div>
							<div className="expri-items-box about-items-counter">
								<h2 className="fw_600 n0-color mb-2">00</h2>
								<span className="expri-clr text-uppercase n00-color fw_300 fs-six">
									UNHAPPY CLIENTS
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row g-xxl-6 g-4">
					<div
						className="col-lg-3 col-md-6 aos-init aos-animate"
						data-aos="zoom-in-down"
						data-aos-duration="1400"
					>
						<div className="text-center h-100 cmn-box position-relative pt-xxl-7 pt-xl-6 pt-5 pb-xxl-6 pb-xl-8 pb-5 px-xxl-8 px-xl-6 px-lg-4 px-4">
							<ul className="body-social body-socialtwo body-social-sliceabout">
								<li>
									<a href="javascript:void(0)" className="soci">
										<svg
											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M30.8307 7.98242C26.4974 15.5658 18.1474 19.9158 9.4474 19.1324L4.16406 18.6491"
												stroke="white"
												stroke-width="1.5"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M9.16406 32.2835C13.4974 24.7001 21.8474 20.3501 30.5474 21.1335L35.8307 21.6168"
												stroke="white"
												stroke-width="1.5"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M20.0026 36.6673C29.2074 36.6673 36.6693 29.2054 36.6693 20.0007C36.6693 10.7959 29.2074 3.33398 20.0026 3.33398C10.7979 3.33398 3.33594 10.7959 3.33594 20.0007C3.33594 29.2054 10.7979 36.6673 20.0026 36.6673Z"
												stroke="white"
												stroke-width="1.5"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M12.7188 5L18.0188 11.5833C21.5688 15.9833 24.0854 21.1 25.4188 26.5833L27.4354 34.9"
												stroke="white"
												stroke-width="1.5"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span className="shape-icon">
											<img
												src="assets/images/global/social-hover.png"
												alt="img"
											/>
										</span>
									</a>
								</li>
								<li>
									<a href="javascript:void(0)" className="soci">
										<svg
											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.0026 36.6654H25.0026C33.3359 36.6654 36.6693 33.332 36.6693 24.9987V14.9987C36.6693 6.66536 33.3359 3.33203 25.0026 3.33203H15.0026C6.66927 3.33203 3.33594 6.66536 3.33594 14.9987V24.9987C3.33594 33.332 6.66927 36.6654 15.0026 36.6654Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M19.9974 25.8346C23.2191 25.8346 25.8307 23.223 25.8307 20.0013C25.8307 16.7796 23.2191 14.168 19.9974 14.168C16.7757 14.168 14.1641 16.7796 14.1641 20.0013C14.1641 23.223 16.7757 25.8346 19.9974 25.8346Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M29.3961 11.6654H29.4154"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
										<span className="shape-icon">
											<img
												src="assets/images/global/social-hover.png"
												alt="img"
											/>
										</span>
									</a>
								</li>
							</ul>
							<div className="stay mt-xxl-5 mt-xl-5 mt-lg-10 mt-12">
								<a
									href="about.html"
									className="d-flex stay-with justify-content-start n06"
								>
									Stay With Me
								</a>
								<a
									href="about.html"
									className="d-flex mt-2 cmn-footarrow align-items-center justify-content-between"
								>
									<span className="fw_500 fs-seven n0-color fs-seven fw_300">
										Profiles
									</span>
									<span className="cmn-svg40">
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
											></path>
											<path
												d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
												fill="white"
											></path>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 order-first order-lg-0 aos-init aos-animate"
						data-aos="zoom-in-up"
						data-aos-duration="1400"
					>
						<div className="cmn-box about-education-box h-100 py-xxl-7 py-xl-8 py-lg-8 py-5 px-xxl-8 px-xl-6 px-lg-4 px-6">
							<img
								src="/shapes/s-shape1.png"
								alt="img"
								className="s-shape1"
							/>
							<h5 class="fs-4 s1-color mb-3 fw_500 title-extraclr">Education</h5>
							<div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
								<div className="edu-text-box">
									<span className="mb-3 d-block fs-seven fw_300 n06">
										2015 - 2019
									</span>
									<span className="fs20 mb-2 d-block n0-color">
										Bachelor Degree in Psychology
									</span>
									<span className="d-block fs-seven fw_300 n06">
										University of California
									</span>
								</div>
								<div className="edu-text-box">
									<span className="mb-3 d-block fs-seven fw_300 n06">
										2015 - 2019
									</span>
									<span className="fs20 mb-2 d-block n0-color">
										Master Degree in Designing
									</span>
									<span className="d-block fs-seven fw_300 n06">
										University of California
									</span>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-3 col-md-6 position-relative cus-z1 aos-init aos-animate"
						data-aos="zoom-in-down"
						data-aos-duration="1400"
					>
						<a
							href="contact.html"
							className="common-serbox position-relative cus-z1 d-flex align-items-center justify-content-center h-100 d-block cmn-box py-xl-8 py-4 px-xxl-6 px-xxl-6 px-lg-4 px-4"
						>
							<span>
								<span className="d-block mb-109 fw_500 fs-five n0-color work-respon">
									Let’s Works Together...!
								</span>
								<span className="d-flex cmn-footarrow get-respons-1199 align-items-center justify-content-between">
									<span className="fw_500 fs-seven n0-color">Get In Touch</span>
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
										></path>
										<path
											d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
											fill="white"
										></path>
									</svg>
								</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

Home.pageProps = {
	title: "About Me",
};
