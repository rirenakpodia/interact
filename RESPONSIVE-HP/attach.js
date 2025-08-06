jQuery(function($) {
$(document).ready(function() {
    var int;
    var one = true;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 750) {
            if (int) {
                return;
            }
            createInterval();
        } else {
            destroyInterval();
        }
    });

    $('.js-bspot-right-link').mouseover(function() {
        destroyInterval();
        rotateBanner(true);
        one = false;
    }).mouseleave(function() {
        createInterval();
    });

    $('.js-bspot-left-link').mouseover(function() {
        destroyInterval();
        rotateBanner(false);
        one = true;
    }).mouseleave(function() {
        createInterval();
    });

    function createInterval() {
        int = setInterval(function() {
            rotateBanner(one);
            one = !one;
        }, 4500);
    }

    function destroyInterval() {
        clearInterval(int);
        int = null;
    }

    function rotateBanner(one) {
        if (one) {
            $('.rightCTA').addClass('hoverFadeIn');
            $('.leftCTA').removeClass('hoverFadeIn');
            $('#bspot-right').addClass('hoverFadeOut');
            $('#bspot-left').addClass('hoverFadeOut');
            $('#bspot-right').addClass('hoverFadeIn');
        } else {
            $('.leftCTA').addClass('hoverFadeIn');
            $('.rightCTA').removeClass('hoverFadeIn');
            $('#bspot-left').removeClass('hoverFadeOut');
            $('#bspot-right').removeClass('hoverFadeIn');
            $('#bspot-right').addClass('hoverFadeOut');
        }
    }
});
//
//
//
//
// cspot half
//
//
//
jQuery(function($) {
    var int;
    var three = true;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1350) {
            if (int) {
                return;
            }
            createInterval();
        } else {
            destroyInterval();
        }
    });

    $('.js-cspot-right-link').mouseover(function() {
        destroyInterval();
        rotateBanner(true);
        three = false;
    }).mouseleave(function() {
        createInterval();
    });

    $('.js-cspot-left-link').mouseover(function() {
        destroyInterval();
        rotateBanner(false);
        three = true;
    }).mouseleave(function() {
        createInterval();
    });

    function createInterval() {
        int = setInterval(function() {
            rotateBanner(three);
            three = !three;
        }, 4000);
    }

    function destroyInterval() {
        clearInterval(int);
        int = null;
    }

    function rotateBanner(three) {
        if (three) {
            $('.CrightCTA').addClass('hoverFadeInC');
            $('.CleftCTA').removeClass('hoverFadeInC');
            $('#cspot-right').addClass('hoverFadeOutC');
            $('#cspot-left').addClass('hoverFadeOutC');
            $('#cspot-right').addClass('hoverFadeInC');
        } else {
            $('.CleftCTA').addClass('hoverFadeInC');
            $('.CrightCTA').removeClass('hoverFadeInC');
            $('#cspot-left').removeClass('hoverFadeOutC');
            $('#cspot-right').removeClass('hoverFadeInC');
            $('#cspot-right').addClass('hoverFadeOutC');
        }
    }
});
//
//
//
//
// espot half
//
//
//
jQuery(function($){
	$('.js-espot-two-link').hover(function() {
		$(this).addClass('hoverFadeIn');
		$('.espot-one-CTA').removeClass('hoverFadeIn');
		$('.espot-three-CTA').removeClass('hoverFadeIn');
		$('.espot-four-CTA').removeClass('hoverFadeIn');
		$('#espot-three').removeClass('hoverFadeIn');
		$('#espot-four').removeClass('hoverFadeIn');
		$('#espot-two').removeClass('hoverFadeIn');
		$('#espot-one').removeClass('hoverFadeIn');
		$('#espot-four').addClass('hoverFadeOut');
		$('#espot-three').addClass('hoverFadeOut');
		$('#espot-one').addClass('hoverFadeOut');
		$('#espot-two').addClass('hoverFadeIn');

	});
	$('.js-espot-three-link').hover(function() {
		$(this).addClass('hoverFadeIn');
		$('.espot-four-CTA').removeClass('hoverFadeIn');
		$('.espot-two-CTA').removeClass('hoverFadeIn');
		$('.espot-one-CTA').removeClass('hoverFadeIn');
		$('#espot-three').removeClass('hoverFadeOut');
		$('#espot-two').removeClass('hoverFadeIn');
		$('#espot-four').removeClass('hoverFadeIn');
		$('#espot-one').removeClass('hoverFadeIn');
		$('#espot-two').addClass('hoverFadeOut');
		$('#espot-one').addClass('hoverFadeOut');
		$('#espot-four').addClass('hoverFadeOut');
		$('#espot-three').addClass('hoverFadeIn');

	});

	$('.js-espot-four-link').hover(function() {
		$(this).addClass('hoverFadeIn');
		$('.espot-three-CTA').removeClass('hoverFadeIn');
		$('.espot-two-CTA').removeClass('hoverFadeIn');
		$('.espot-one-CTA').removeClass('hoverFadeIn');
		$('#espot-four').removeClass('hoverFadeOut');
		$('#espot-two').removeClass('hoverFadeIn');
		$('#espot-three').removeClass('hoverFadeIn');
		$('#espot-one').removeClass('hoverFadeIn');
		$('#espot-two').addClass('hoverFadeOut');
		$('#espot-one').addClass('hoverFadeOut');
		$('#espot-three').addClass('hoverFadeOut');
		$('#espot-four').addClass('hoverFadeIn');
	});


	$('.js-espot-one-link').hover(function() {
		$(this).addClass('hoverFadeIn');
		$('.espot-two-CTA').removeClass('hoverFadeIn');
		$('.espot-three-CTA').removeClass('hoverFadeIn');
		$('.espot-four-CTA').removeClass('hoverFadeIn');
		$('#espot-one').removeClass('hoverFadeOut');
		$('#espot-two').removeClass('hoverFadeIn');
		$('#espot-four').removeClass('hoverFadeIn');
		$('#espot-three').removeClass('hoverFadeIn');
		$('#espot-three').addClass('hoverFadeOut');
		$('#espot-four').addClass('hoverFadeOut');
		$('#espot-two').addClass('hoverFadeOut');
		$('#espot-one').addClass('hoverFadeIn');
	});

	function rotateBanner1() {
		setInterval(function(){
			$('.rightCTA').addClass('hoverFadeIn');
			$('.leftCTA').removeClass('hoverFadeIn');
			$('#seriously').addClass('hoverFadeOut');
			$('#bethany').addClass('hoverFadeIn');
			$('#bethany').addClass('hoverFadeOut');
			$('#seriously').addClass('hoverFadeIn');
		},3000)();
	}
});
});
