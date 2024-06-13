

import jQuery from "jquery";

export default function initAboutImports() {
	window.$ = window.jQuery = jQuery;

    require("velocity-animate");
    require("velocity-ui-pack");

	function hex_initial_animation() {
		$(".skills-init").velocity("transition.expandIn", {
			stagger: 150,
		});
		$(".skills-init").velocity("callout.pulse");
	}
	hex_initial_animation();

	// var hoverdetect = setInterval(function () {
	// 	hovernotify();
	// }, 3000);
	// function hovernotify() {
	// 	$(".hover-notify").velocity("callout.tada");
	// }

	// function myStopFunction() {
	// 	$(".hover-notify").velocity("stop", true).velocity("fadeOut");
	// 	// clearInterval(hoverdetect);
	// }

    $('.skills-init').on('mouseenter', function () {
        // myStopFunction();

        var title_color = $(this).attr("data-color");
        var title_name = $(this).attr("data-title");
        var desc_name = $(this).attr("data-content");

        function hex_description() {
            $(".code-description")
                .velocity("stop", true)
                .velocity("transition.slideRightBigIn");
            $("." + desc_name)
                .siblings()
                .removeClass("desc-active");
            setTimeout(function () {
                $("." + desc_name).addClass("desc-active");
                $(".code-descriptopn > div, .desc-active")
                    .children()
                    .velocity("stop", true)
                    .velocity("transition.slideRightBigIn", { stagger: 300 });
                $(".code-title, .desc-active .code-skill-wrapper").velocity(
                    { borderColor: title_color },
                    { queue: false }
                );
                $(".code-title").text(title_name);
            }, 0);
        }

        hex_description();

        // $(this).addClass("hexactive");
        // $(".hexactive").velocity(
        //     { scaleX: "1.1", scaleY: "1.1" },
        //     { duration: 200 }
        // );
    }).on('mouseleave', function () {
        $(".hexactive")
            .velocity("stop", true)
            .velocity("reverse")
            .removeClass("hexactive");
    });

}
