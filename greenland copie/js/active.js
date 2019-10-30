(function ($) {
    'use strict';

    // Fullscreen Active Code
    $(window).on('resizeEnd', function () {
        $(".full_height").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".slides_container").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000, // Duration for one slide to another silde
            smartSpeed: 500,
            autoplayHoverPause: false
        });
    }

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            autoplayHoverPause: false
        });
        $(".welcome_area_thumb").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 800
        });
    }

    // Meanmenu Active Code
    if ($.fn.meanmenu) {
        $('.main_menu_area .mainmenu nav').meanmenu({
            onePage: true
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('#player').mb_YTPlayer();
    }

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }
    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // ScrollUp Active Code
    if ($.fn.stellar) {
        $(window).stellar({
            responsive: true,
            positionProperty: 'transform',
            horizontalScrolling: false,
            parallaxBackgrounds: true,
            parallaxElements: true
        });
    }

    // :: 8.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // Onepage Demo Active Code
    $(".onepage_demo_switcher").on('click', function () {
        $(".onepage_demo_area").toggleClass('on');
    })

    // Sticky Active Code
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main_header_area').addClass('sticky slideInDown');
            $('body').addClass('mobile_menu_on');

        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
            $('body').removeClass('mobile_menu_on');
        }
    });

    // Preloader active code
    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);