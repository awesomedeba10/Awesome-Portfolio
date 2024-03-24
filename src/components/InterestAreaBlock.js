import { Kanit } from "next/font/google";
import { kanit } from "../utils/fonts";

import { interestData } from "../utils/pageData";

export default function InterestAreaBlock() {
    return (
        <div class="accordion">
            <ul>
                {interestData.map((fav, index) => (
                    <a href="#" key={index}>
                        <li>
                            <div>
                                <div className="accordion-card h-100 w-100 text-center position-absolute p-2">
                                    <i
                                        class={`n1-color fa-solid ${fav.icon} mb-3`}
                                    ></i>
                                    <span className={`mt-2 ${kanit.className}`}>
                                        {fav.name}
                                    </span>
                                </div>

                                <div class="accordion_item_inf h-100">
                                    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
                                        <div className="text-center fs-1 px-2 py-3">
                                            <i class={`n1-color fa-solid ${fav.icon} mb-4`}></i>
                                            <span className={`mt-2 ${kanit.className}`}>
                                                {fav.name}
                                            </span>
                                        </div>
                                        <div class="px-2 py-3 text-center">
                                            <p class="text-lg font-medium h-100">{fav.description}</p>
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
