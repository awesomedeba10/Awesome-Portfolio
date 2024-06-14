import { useState } from "react";
import { kanit } from "../utils/fonts";
import { skillsLayoutsData } from "../utils/pageData";

export default function SkillsLayout() {
	const [activeSkill, setActiveSkill] = useState(null);

	const handleMouseEnter = (index) => {
		setActiveSkill(index);
	};

	return (
		<div className="position-relative d-flex intro-skills">
			<div
				className={`d-grid col-md-3 gap-4 intro-skills-list ${kanit.className}`}
			>
				{skillsLayoutsData.map((skill, index) => (
					<div
						key={index}
						className="skills-init gap-4 d-flex align-items-center justify-content-center py-3"
						data-title={skill.specifiedTitle}
						data-content={`${skill.title
							.toLowerCase()
							.replace(/ /g, "-")}-desc`}
						data-color={skill.beautifyColorCode}
						onMouseEnter={() => handleMouseEnter(index)}
					>
						{skill.title}
					</div>
				))}
			</div>

			<div className="position-relative col-md-9 code-display pt-5">
				<div className="code-description">
					{skillsLayoutsData.map((skill, index) => (
						<div
							key={index}
							className={`${skill.title.toLowerCase().replace(/ /g, "-")}-desc`}
						>
							<p className="code-title"></p>
							<section className="d-grid gap-3 code-skills pt-2">
								{skill.skillsSet.map((set, index2) => (
									<div className="code-skill-wrapper" key={`${index}${index2}`}>
										<div>
											<p>{set.name}</p>
											{/* <span claxss="rating-value" rating-value={set.rating}></span> */}
											<span className={`badge-wrapper ${kanit.className}`}
                                            style={{ background: skill.beautifyColorCode }}>{set.exp}</span>
										</div>
									</div>
								))}
							</section>
							<div
								className="skills-bg"
								style={
									activeSkill === index
										? {
												background: `url(${skill.bgImage}) no-repeat right center / contain`,
										  }
										: {}
								}
							></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
