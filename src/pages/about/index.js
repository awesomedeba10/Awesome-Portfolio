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
