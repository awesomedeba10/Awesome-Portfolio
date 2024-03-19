"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "magnific-popup/dist/magnific-popup.css";
import "swiper/swiper-bundle.css";

import jQuery from "jquery";
import Aos from "aos";

export default function initImports() {
    require("bootstrap/dist/js/bootstrap.bundle");
    require("magnific-popup");

    window.$ = window.jQuery = jQuery;

    if ($(".image-popup-vertical-fit").length > 0) {
        $(".image-popup-vertical-fit").magnificPopup({
            type: "image",
            closeOnContentClick: true,
            mainClass: "mfp-img-mobile",
            image: {
                verticalFit: true,
            },
        });
    }

    Aos.init({
        once: true,
        easing: "ease-in-out",
    });
}
