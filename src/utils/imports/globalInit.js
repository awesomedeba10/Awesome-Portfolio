"use client";

import jQuery from "jquery";
import Aos from "aos";
import Swiper from "swiper";

export default function initGlobalImports() {
    require("bootstrap/dist/js/bootstrap.bundle");

    window.$ = window.jQuery = jQuery;

    require("waypoints/lib/noframework.waypoints.min");
    require("jquery-migrate");

    // preloader
    setTimeout(function () {
        $("#preloader").fadeToggle();
    }, 400);

    Aos.init({
        once: true,
        easing: "ease-in-out",
    });

    var ScrollTop = $(".scrollToTop");
    $(".scrollToTop").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            600
        );
        return false;
    });

        // window on scroll function//
    $(window).on("scroll", function () {
        // Check Scroll //
        if ($(this).scrollTop() < 600) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
        // Check Scroll //

        // Odometer Init //
        let windowHeight = $(window).height();
        $(".odometer")
            .children()
            .each(function () {
                if (
                    $(this).isInViewport({
                        tolerance: windowHeight,
                        toleranceForLast: windowHeight,
                        debug: false,
                    })
                ) {
                    var section = $(this).closest(".counters");
                    section.find(".odometer").each(function () {
                        $(this).html($(this).attr("data-odometer-final"));
                    });
                }
            });
        // Odometer Init //
    });
    // window on scroll function//

    // Light/Dark Switch; will implement later :P
    setTheme("light-theme");
    $(".mode--toggle").on("click", function () {
        toggleTheme();
    });

    function toggleTheme() {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    }

    function setTheme(theme) {
        localStorage.setItem("theme", theme);

        if (theme === "dark-theme") {
            $("html").addClass("dark-theme").removeClass("light-theme");
        } else {
            $("html").addClass("light-theme").removeClass("dark-theme");
        }
    }

    // BG Random floating dots
    if ($('.line-shape span').length == 0) {
        for (let i = 0; i < 100; i++) {
            const clone = $("<span></span>").clone();
            clone.appendTo(".line-shape.first");
        }
    }

    // Mouse Follower //
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
        follower.animate(
            [
                {
                    opacity: 1,
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`,
                    easing: "ease-in-out",
                },
            ],
            {
                duration: 3000,
                fill: "forwards",
            }
        );
        dot.animate(
            [
                {
                    opacity: 1,
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`,
                    easing: "ease-in-out",
                },
            ],
            {
                duration: 1500,
                fill: "forwards",
            }
        );
    });

    // magnific-popup//
    // $(".popup-video").magnificPopup({
    //     type: "iframe",
    // });
    // magnific-popup//

    // gridGallery//
    // $(".popup_img").magnificPopup({
    //     type: "image",
    //     gallery: {
    //         enabled: true,
    //     },
    // });
    // gridGallery//

    // var swiper = new Swiper(".free__livewrap", {
    //     loop: true,
    //     slidesPerView: 1,
    //     slidesToShow: 1,
    //     spaceBetween: 48,
    //     speed: 1000,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     autoplay: {
    //         delay: 1400,
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 2,
    //             spaceBetween: 48,
    //         },
    //         992: {
    //             slidesPerView: 2,
    //             spaceBetween: 24,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         576: {
    //             slidesPerView: 1,
    //             spaceBetween: 14,
    //         },
    //     },
    // });
    // // swipper slide //

    // // educational slide //
    // var swiper = new Swiper(".educational__wrap", {
    //     loop: true,
    //     slidesPerView: 1,
    //     slidesToShow: 1,
    //     spaceBetween: 24,
    //     speed: 1000,
    //     navigation: {
    //         nextEl: ".swiper-button-next2",
    //         prevEl: ".swiper-button-prev2",
    //     },
    //     autoplay: {
    //         delay: 1200,
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 3,
    //             spaceBetween: 24,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //             spaceBetween: 14,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 14,
    //         },
    //         576: {
    //             slidesPerView: 2,
    //             spaceBetween: 14,
    //         },
    //         500: {
    //             slidesPerView: 1,
    //             spaceBetween: 14,
    //         },
    //     },
    // });
    // var swiper = new Swiper(".arti-slidewrap", {
    //     loop: true,
    //     slidesPerView: 1,
    //     slidesToShow: 1,
    //     spaceBetween: 24,
    //     speed: 1000,
    //     navigation: {
    //         nextEl: ".swiper-button-next2",
    //         prevEl: ".swiper-button-prev2",
    //     },
    //     autoplay: {
    //         delay: 1200,
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 3,
    //             spaceBetween: 24,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //             spaceBetween: 16,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 16,
    //         },
    //         650: {
    //             slidesPerView: 1,
    //             spaceBetween: 16,
    //         },
    //         500: {
    //             slidesPerView: 1,
    //             spaceBetween: 16,
    //         },
    //     },
    // });
    // // swipper slide //
}