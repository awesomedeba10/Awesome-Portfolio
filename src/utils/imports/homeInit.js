"use client";

import jQuery from "jquery";

export default function initHomeImports() {
    window.$ = window.jQuery = jQuery;

    // Profile Picture animated text
    const text = document.querySelector(".text");
    let formatted_text = text.innerText + " ";
    let angle = 360 / formatted_text.length;
    text.innerHTML = formatted_text
        .split("")
        .map(
            (char, i) =>
                `<span style="transform:rotate(${i * angle}deg)">${char}</span>`
        )
        .join("");

    // AOI accordion
    var $accordion_a_w_no_hover = 8,
        $accordion_a = $(".accordion a"),
        $accordion_a_w_hover =
            100 - $accordion_a_w_no_hover * $accordion_a.length + "%",
        $accordion_a_w = 100 / $accordion_a.length;

    $accordion_a.css("width", $accordion_a_w + "%");

    $accordion_a.on('mouseenter',
        function () {
                $accordion_a.css("width", 0 + "%");
                $(this).css("width", $accordion_a_w_hover);
            }
        ).on('mouseleave', function () {
            $accordion_a.css("width", $accordion_a_w + "%");
        });
}