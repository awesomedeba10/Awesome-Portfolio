import Link from "next/link";
import { useEffect } from "react";

import { userData } from "../utils/pageData";
import { vollkorn, kanit } from "../utils/fonts";

import initHomeImports from "../utils/imports/homeInit";

import ElementFooterLink from "../components/ElementFooterLink";
import SocialProfileList from "../components/SocialProfileList";
import InterestAreaBlock from "../components/InterestAreaBlock";
import ExperienceHomePageBlock from "../components/ExperienceHomePageBlock";
import SkillsList from "../components/SkillsAreaBlock";

export default function Home() {
	useEffect(() => {
		initHomeImports();
	}, []);

	return (
		<section
			className={`body-box body-box1 position-relative cus-z-1 mt-5 ${vollkorn.className}`}
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
												<p>Code & Canvas: A Showcase of My Work •</p>
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-center">
										<Link
											href="/about"
											className="w-100 cmn-btn text-center justify-content-center gap-2 d-inline-flex align-items-center mt-4 mb-3 py-2 px-4"
										>
											<span className="fs-5 n0-color">
												I’m {userData.name}{" "}
											</span>
											<i className="icon fa-regular fa-hand-peace"></i>
										</Link>
									</div>
									<p
										className={`fs-6 text-center text-xxl-center my-4 n0-color aos-init aos-animate ${kanit.className}`}
										data-aos="fade-down"
										data-aos-duration="1200"
									>
										{userData.shortIntro}
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
											<span className="fw_500 fs-seven n0-color">All Blog</span>
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
												Current Title
											</h5>
											<h3
												className={`titles-designer aos-init aos-animate pt-3 pb-2 ${kanit.className}`}
												data-aos="fade-down"
												data-aos-duration="1500"
											>
												<a
													href="#" onClick={(e) => e.preventDefault()}
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
								<div
									className="col-lg-12 mb-4"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className="cmn-box service-offering py-4 px-6">
										<span className="d-block fs-3 fw-semibold n0-color">
											Areas of Interest{" "}
										</span>
										<div className="d-flex align-items-center gap-2 mb-5">
											<span className="fs-seven">
												Take a look at some of the things I love working
												on&nbsp;&nbsp; *•.
											</span>
											<i className="fa-solid fa-person-snowboarding goodthingking-img n0-color fs-5"></i>
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
								<div
									className="col-lg-12 col-md-8 col-sm-6"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className="repeat-skilltools">
										<div className="cmn-box position-relative d-block pb-xl-8 pb-4 pt-xl-8 pt-4">
											<span className="d-block mb-xxl-2 mb-3 fw_500 fs-five n0-color px-xxl-6 px-xl-6 px-lg-4 px-4">
												Skills & Tools
											</span>
											<SkillsList></SkillsList>
										</div>
									</div>
								</div>
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
									<div className="w-4/5">
										<span className="fs-5 fw-semibold n0-color">
											Here&apos;s my Resume,&nbsp; in case...
										</span>
									</div>
									<div className="w-1/5 py-2">
										<Link href="/about" className="cv-dl-wrapper">
											<i className="fs-1 fa-regular fa-circle-down"></i>
										</Link>
									</div>
								</div>
							</div>
							<div
								className="h-100 col-lg-12 col-md-6 col-sm-6 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								<div className="expri-box cmn-box d-grid position-relative pt-xxl-7 pt-6 pb-xxl-9 pb-6 px-xxl-8 px-xl-6 px-lg-4 px-4">
									<h5 className="fs-4 s1-color mb-3 fw_500 title-extraclr">
										Work Experience
									</h5>

									<ExperienceHomePageBlock></ExperienceHomePageBlock>
									<ElementFooterLink name="Dig the Deets" redirectTo="/about" />
								</div>
							</div>
							<div className="col-lg-12 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
								<div
									className="cmn-box position-relative d-block px-xl-4 px-2 py-xl-4 py-2"
								>
									<div className="d-flex flex-column align-items-left gap-2">
                                        <div className="d-flex gap-3 align-items-center">
                                            <i className="fa-solid fa-at n0-color fs-5"></i>
											<span className={`fs-seven ${kanit.className}`}>{userData.email}</span>
                                        </div>
                                        <div className="d-flex gap-3 align-items-center">
                                            <i className="fa-solid fa-signal n0-color fs-6"></i>
											<span className={`fs-seven ${kanit.className}`}>{userData.phone}</span>
                                        </div>
                                    </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

Home.pageProps = {
	title: "Home Me",
};
