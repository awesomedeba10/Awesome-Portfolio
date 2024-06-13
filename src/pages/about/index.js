import Link from "next/link";
import { useEffect } from "react";

import { userData } from "../../utils/pageData";
import { vollkorn, kanit } from "../../utils/fonts";

import initAboutImports from "../../utils/imports/aboutInit";

import EducationAreaBlock from "../../components/EducationAreaBlock";
import ExperienceAboutPageBlock from "../../components/ExperienceAboutPageBlock";
import SocialProfileList from "../../components/SocialProfileList";
import SkillsLayout from "../../components/SkillsAreaAboutPageBlock";

export default function Home() {
	useEffect(() => {
		initAboutImports();
	}, []);

	return (
		<section
			className={`body-box body-box1 position-relative cus-z-1 mt-4 ${vollkorn.className}`}
		>
			<div className="mw-92 container">
				<div className="row mb-xxl-6 mb-4 flex-row-reverse justify-content-center g-xxl-6 g-4">
					<div
						className="col-lg-3 col-md-5 col-sm-8 aos-init aos-animate"
						data-aos="zoom-in-up"
						data-aos-duration="1000"
					>
						<div
							className="cmn-box py-5 px-6 aos-init aos-animate"
							data-aos="zoom-in-down"
							data-aos-duration="2000"
						>
							<div className="justify-center flex layla-thumb position-relative about-layla m-auto text-center py-2">
								<img src="/profile.webp" alt="img" className="radius100" />
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
							<img src="/shapes/ring2.png" alt="img" className="s-shape2" />
							<div className="layla-infoabout text-center">
								<h4
									className={`text-white mb-md-6 mb-4 fw_500 ${kanit.className}`}
								>
									<span className="d-block">Hello,</span>
									I’m {userData.name}
								</h4>
								<div
									className="pb-1"
									dangerouslySetInnerHTML={{ __html: userData.longIntro }}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row g-xxl-6 g-4 mb-xxl-6 mb-4">
					<div
						className="col-xl-12 aos-init aos-animate"
						data-aos="fade-down"
						data-aos-duration="1200"
					>
						<div className="cmn-box h-100 py-4 px-6">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h5 className="fs-4 s1-color fw_500 title-extraclr">
									My Experience
								</h5>
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
							<ExperienceAboutPageBlock></ExperienceAboutPageBlock>
						</div>
					</div>
				</div>
				<div className="row g-xxl-6 g-4">
					<div
						className="col-xl-3 aos-init aos-animate"
						data-aos="fade-down"
						data-aos-duration="1800"
					>
						<div className="cmn-box about-education-box h-100 py-4 px-6">
							<img src="/shapes/s-shape1.png" alt="img" className="s-shape1" />
							<h5 className="fs-4 s1-color mb-3 fw_500 title-extraclr">
								Education
							</h5>
							<EducationAreaBlock></EducationAreaBlock>
						</div>
					</div>
					<div
						className="col-lg-9"
						data-aos="fade-down"
						data-aos-duration="1500"
					>
						<div className="repeat-skilltools">
							<div className="cmn-box position-relative d-block py-4 px-6">
								<span className="d-block mb-xxl-2 mb-3 fw_500 fs-five n0-color">
									Skills & Tools
								</span>
								<SkillsLayout></SkillsLayout>
							</div>
						</div>
					</div>
					<div
						className="col-lg-3 col-sm-6 aos-init aos-animate"
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
					<div
						className="col-lg-3 col-md-6 position-relative cus-z1 aos-init aos-animate"
						data-aos="zoom-in-down"
						data-aos-duration="1400"
					>
						<div className="cmn-box py-4 px-6">
							<div className="d-grid gap-4 test-div">
								<div className="d-flex align-items-center justify-content-center">
									1
								</div>
								<div className="d-flex align-items-center justify-content-center">
									2
								</div>
								<div className="d-flex align-items-center justify-content-center">
									3
								</div>
								<div className="d-flex align-items-center justify-content-center">
									4
								</div>
								<div className="d-flex align-items-center justify-content-center">
									5
								</div>
								<div className="d-flex align-items-center justify-content-center">
									6
								</div>
								<div className="d-flex align-items-center justify-content-center">
									7
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
	title: "About Me",
	redirectBackTo: "Home",
	redirectBackHref: "/",
};
