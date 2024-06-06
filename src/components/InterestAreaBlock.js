import { kanit } from "../utils/fonts";

import { interestData } from "../utils/pageData";

export default function InterestAreaBlock() {
    return (
        <div className="accordion">
            <ul>
                {interestData.map((fav, index) => (
                    <a href="#" key={index}>
                        <li>
                            <div>
                                <div className="accordion-card h-100 w-100 text-center position-absolute p-2">
                                    <i
                                        className={`n1-color fa-solid ${fav.icon} mb-3`}
                                    ></i>
                                    <span className={`mt-2 ${kanit.className}`}>
                                        {fav.name}
                                    </span>
                                </div>

                                <div className="accordion_item_inf h-100">
                                    <figure className="flex h-100 bg-slate-100 rounded-xl gap-2 px-4 py-3">
                                        <div className="text-center">
                                            <i className={`n1-color fs-1 fa-solid ${fav.icon}`}></i>
                                            <span className={`mt-3 ${kanit.className}`}>
                                                {fav.name}
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-medium h-100 py-2">{fav.description}</p>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
