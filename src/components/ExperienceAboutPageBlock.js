import { kanit } from "../utils/fonts";
import { experienceData } from "../utils/pageData";

// Function to remove emojis from a string
const removeEmojis = (str) => {
    return str.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}]/gu, '');
};

export default function ExperienceAboutPageBlock() {
    return (
        <div className="accordion" id="accordion-experience">
            {experienceData.map((exp, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={`${index === 0 ? 'true' : 'false'}`} aria-controls={`collapse${index}`}>
                            {removeEmojis(exp.company)} - {removeEmojis(exp.role)} - {removeEmojis(exp.dateFrom)} to {removeEmojis(exp.dateTo)}
                        </button>
                    </h2>
                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#accordion-experience">
                    <div className="accordion-body">
                            <ul>
                                {exp.achievements && exp.achievements.map((achievement, achIndex) => (
                                    <li className="exp-points" key={achIndex}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
