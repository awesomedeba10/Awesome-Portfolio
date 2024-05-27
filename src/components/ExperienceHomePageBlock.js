import { kanit } from "../utils/fonts";

import { experienceData } from "../utils/pageData";

export default function ExperienceHomePageBlock() {
    return (
        <div id="expri-timeline" class="timeline">
            {experienceData.map((exp, index) => (
                <div class="timeline__item">
                    <div class="timeline__item-header">
                        <span class="timeline__dot"></span>
                        <span id="item1-name" class="timeline__meta">
                            <span class="timeline__company">{exp.company}</span><br></br>
                            <span class="timeline__role">{exp.role}</span><br></br>
                            <span class="timeline__info">
                                <span class="timeline__date">{exp.dateFrom} - {exp.dateTo}</span>
                                <span class="timeline__loc">{exp.location}</span>
                            </span>
                        </span>
                    </div>
                    <div class="timeline__item-body" id="item1-ctrld" role="region" aria-labelledby="item1" aria-hidden="true">
                        <div class="timeline__item-body-content">
                            <p class="timeline__item-p"></p>
                        </div>
                    </div>
                </div>
             ))}
        </div>
    );
}
