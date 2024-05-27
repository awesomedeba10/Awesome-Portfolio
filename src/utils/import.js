"use client";

import jQuery from "jquery";
import Aos from "aos";
import Swiper from "swiper";

export default function initImports() {
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

    var swiper = new Swiper(".free__livewrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 48,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1400,
        },
        breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
        },
    });
    // swipper slide //

    // educational slide //
    var swiper = new Swiper(".educational__wrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 24,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 1200,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
        },
    });
    var swiper = new Swiper(".arti-slidewrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 24,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 1200,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            650: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
        },
    });
    // swipper slide //

    // Banner line
    for (let i = 0; i < 100; i++) {
        const clone = $("<span></span>").clone();
        clone.appendTo(".line-shape.first");
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

    // Mouse Follower Hide Function //
    $("a, button").on("mouseenter mouseleave", function () {
        $(".mouse-follower").toggleClass("hide-cursor");
    });

    // Mouse Follower slider icon Function //
    var newElement = $(
        '<i class="material-symbols-outlined fs-four"> arrow_range </i>'
    );
    $(".slider-icon-area").on("mouseleave", function () {
        $(".mouse-follower").removeClass("slider-icon-active");
        newElement.remove();
    });
    $(".slider-icon-area").on("mouseenter", function () {
        $(".mouse-follower").addClass("slider-icon-active");
        $(".slider-icon-active .cursor-outline").append(newElement);
    });

    // Custom Tabs //
    $(".tablinks .nav-links").each(function () {
        var targetTab = $(this).closest(".singletab");
        targetTab.find(".tablinks .nav-links").each(function () {
            var navBtn = targetTab.find(".tablinks .nav-links");
            navBtn.click(function () {
                navBtn.removeClass("active");
                $(this).addClass("active");
                var indexNum = $(this).closest("li").index();
                var tabcontent = targetTab.find(".tabcontents .tabitem");
                $(tabcontent).removeClass("active");
                $(tabcontent).eq(indexNum).addClass("active");
            });
        });
    });

    // Custom Tabs //

    // Custom Tabs two  //
    // Custom Tabs two //

    // tabLinks add active  //
    $(".tabLinks .nav-links").on("mouseenter", function () {
        $(this).addClass("active");
        $(".tabLinks .nav-links").not(this).removeClass("active");
    });
    // tabLinks add active  //

    // custom Accordion //
    $(".accordion-single .header-area").on("click", function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
            $(this).closest(".accordion-single").removeClass("active");
            $(this).next(".content-area").slideUp();
        } else {
            $(".accordion-single").removeClass("active");
            $(this).closest(".accordion-single").addClass("active");
            $(".content-area").not($(this).next(".content-area")).slideUp();
            $(this).next(".content-area").slideToggle();
        }
    });

    var $accordion_a_w_no_hover = 8,
        $accordion_a = $(".accordion a"),
        $accordion_a_w_hover =
            100 - $accordion_a_w_no_hover * $accordion_a.length + "%",
        $accordion_a_w = 100 / $accordion_a.length;

    $accordion_a.css("width", $accordion_a_w + "%");

    $accordion_a.hover(
        function () {
            $accordion_a.css("width", 0 + "%");
            $(this).css("width", $accordion_a_w_hover);
        },
        function () {
            $accordion_a.css("width", $accordion_a_w + "%");
        }
    );

    // To be used later
    // $(".timeline__arrow").on("click", function () {
    //     let el = $(this),
    //     isCollapsed = el.attr('aria-expanded'),
    //     $expandable = $(`#${el.attr('aria-controls')}`);

    //     if (isCollapsed == 'false') {
    //         el.attr('aria-expanded', 'true');
    //         $expandable.attr('aria-hidden', isCollapsed).slideDown();
    //         $expandable.addClass('timeline__item-body--expanded');
    //         $expandable.find('.timeline__item-body-content').css({
    //                 opacity: 1,
    //                 visibility: 'visible'
    //             })
    //     } else {
    //         el.attr('aria-expanded', 'false');
    //         $expandable.attr('aria-hidden', isCollapsed).slideUp();
    //         $expandable.removeClass('timeline__item-body--expanded');
    //         $expandable.find('.timeline__item-body-content').css({
    //             opacity: 0,
    //             visibility: 'hidden'
    //         })
    //     }
    // });

}
