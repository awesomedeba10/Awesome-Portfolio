import Link from 'next/link';
import { educationData } from "../utils/pageData";

export default function EducationAreaBlock() {
    return (
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
            {educationData.map((list, index) => (
            <div className="edu-text-box">
                <span className="mb-3 d-block fs-seven fw_300 n06">
                    {list.yearFrom} - {list.yearTo}
                </span>
                <span className="fs20 mb-2 d-block n0-color">
                    {list.degree} in {list.stream}
                </span>
                <span className="d-block fs-seven fw_300 n06">{list.institutionName}</span>
            </div>
            ))}
        </div>
    );
}
