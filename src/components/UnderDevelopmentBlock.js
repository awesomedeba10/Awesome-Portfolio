import { kanit } from "../utils/fonts";

export default function UnderDevelopment() {
    return (
		<>
			<style>
				{`
                    .body-box {
                        height: 85vh;
                        width: 100vw;
                    }

                    body {
                        text-align: center;
                        font: 20px Helvetica, sans-serif;
                        color: #333;
                      }
                      h1 {
                        font-size: 4em;
                      }
                      article {
                        display: block;
                        text-align: left;
                        width: 70%;
                        margin: 5em auto;
                    }
                      }
                      article p {
                        font-size: 20px;
                        margin-top: 15px;
                      }
                `}
			</style>
			<section
				className={`body-box body-box1 position-relative cus-z-1 mt-4 ${kanit.className}`}
			>
				<div className="mw-92 container">
					{/* <div className="row mb-xxl-6 mb-4 flex-row-reverse justify-content-center g-xxl-6 g-4">
                        <div
                            className="col-lg-12 col-md-5 col-sm-8 aos-init aos-animate"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            <div
                                className="cmn-box py-5 px-6 aos-init aos-animate"
                                data-aos="zoom-in-down"
                                data-aos-duration="2000"
                            ></div>
                        </div>
                    </div> */}
					<article>
						<h1>Page Under Development</h1>
						<div>
							<p>
								Thank you for visiting my portfolio. This page is currently
								under development as I am working to bring you the best possible
								content and showcase my projects. I appreciate your patience and
								understanding.
							</p>
							<p>— Debanjan Ganguly</p>
						</div>
					</article>
				</div>
			</section>
		</>
	);
}