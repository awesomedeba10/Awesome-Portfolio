import { skillsData } from "../utils/pageData";
import { kanit } from "../utils/fonts";

export default function SkillsList() {
	// To group categories into rows
	const skillRows = [
		["Programming Languages", "Database"],
		["Platform Based Skills", "Frameworks & Libraries"],
	];

	return (
		<>
			{skillRows.map((row, rowIndex) => (
                <div key={rowIndex} className="marquee-wrapper skill-tagslide text-slider">
                    <div className={`marquee-inner to-${rowIndex % 2 === 0 ? 'left' : 'right'}`}>
                        <ul className={`marquee-list d-flex ${kanit.className}`}>
                            <li className="marquee-item">
                                {row.map((category) => (
                                    <>
                                        {skillsData[category].map((skill) => (
                                            <span key={`${skill}-${Math.floor(Math.random() * 1000)}`}  className="text-slider">
                                                <span className="design-tag">{skill}</span>
                                            </span>
                                        ))}
                                    </>
                                ))}
                                {row.map((category) => (
                                    <>
                                        {skillsData[category].map((skill) => (
                                            <span key={`${skill}-${Math.floor(Math.random() * 1000)}`}  className="text-slider">
                                                <span className="design-tag">{skill}</span>
                                            </span>
                                        ))}
                                    </>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
			))}
		</>
	);
}
