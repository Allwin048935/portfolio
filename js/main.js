// main.js
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    // Back to top button
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Typed Initiate
    if ($('.typed-text').length > 0) {
        var typed = new Typed(".typed-text", {
            strings: ["BIM Modeler (Civil 3D/Revit)"],
            typeSpeed: 100,
            backSpeed: 20,
            loop: true
        });
    }
    
    // Portfolio isotope and filter
    $(window).on('load', function () {
        console.log('Isotope initializing...'); // Debug log
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        
        $('#portfolio-filter li').on('click', function () {
            console.log('Filter clicked:', $(this).attr('data-filter')); // Debug log
            $("#portfolio-filter li").removeClass('filter-active');
            $(this).addClass('filter-active');
            portfolioIsotope.isotope({ filter: $(this).attr('data-filter') });
        });
    });
    
})(jQuery);