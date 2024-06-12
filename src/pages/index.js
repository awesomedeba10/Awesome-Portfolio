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
									className="lyla-box1 cmn-box py-4 px-6 aos-init aos-animate"
									data-aos="zoom-in-down"
									data-aos-duration="1500"
								>
									<div
										className="justify-center flex layla-thumb layla-thumbtwo text-center m-auto mt-4 mb-5 aos-init aos-animate"
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
										className={`fs-6 text-center text-xxl-center mt-4 pt-1 pb-2 n0-color aos-init aos-animate ${kanit.className}`}
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
											redirectTo="/portfolio"
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
										<Link href={userData.resumeLink} className="cv-dl-wrapper" target="_blank" rel="noopener noreferrer">
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
									<div className="d-flex flex-column align-items-left gap-3">
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
