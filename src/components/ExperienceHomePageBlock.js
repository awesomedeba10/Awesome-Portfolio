import { kanit } from "../utils/fonts";
import { experienceData } from "../utils/pageData";

export default function ExperienceHomePageBlock() {
    return (
        <div id="expri-timeline" className="timeline">
            {experienceData.map((exp, index) => (
                <div className="timeline__item" key={index}>
                    <div className="timeline__item-header">
                        <span className="timeline__dot"></span>
                        <span id={`item${index}-name`} className="timeline__meta">
                            <span className="timeline__company">{exp.company}</span><br></br>
                            <span className="timeline__role">{exp.role}</span><br></br>
                            <span className="timeline__info">
                                <span className="timeline__date">{exp.dateFrom} - {exp.dateTo}</span>
                                <span className="timeline__loc">{exp.location}</span>
                            </span>
                        </span>
                    </div>
                    <div className="timeline__item-body" id={`item${index}-ctrld`} role="region" aria-labelledby={`item${index}`} aria-hidden="true">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p"></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
