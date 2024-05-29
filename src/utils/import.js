"use client";

import jQuery from "jquery";


export default function initImports() {


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
