

import jQuery from "jquery";

export default function initAboutImports() {
	window.$ = window.jQuery = jQuery;

    require("velocity-animate");
    require("velocity-ui-pack");

	function hex_initial_animation() {
		$(".skills-init").velocity("transition.expandIn", {
			stagger: 150,
            complete: function() {
                // Calling mouseenter on the first element of .skills-init
                $('.skills-init').first().trigger('mouseenter');
            }
		});
		$(".skills-init").velocity("callout.pulse");
	}
	hex_initial_animation();

    $('.skills-init').on('mouseenter', function () {
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
    }).on('mouseleave', function () {
        $(".hexactive")
            .velocity("stop", true)
            .velocity("reverse")
            .removeClass("hexactive");
    });

}
