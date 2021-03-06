﻿var self = this;

self.loaderSpinner = function () {
    var loader = $('.loader');
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var i = 0;

    /*Center loader on half screen */
    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    });

    do {
        loader.animate({
            width: i
        }, 10);
        i += 3;
    } while (i <= 400);

    if (i === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        });
        loader.animate({
            top: '0',
            height: '100vh'
        });
    }

    /* Hide loader and show content */
    setTimeout(function () {
        $('.content').fadeIn(500);
    }, 3000);

    setTimeout(function () {
        $('.loader').hide();
    }, 3500);
};

/* Every time the window is scrolled ... */
$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fadein').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {

            $(this).animate({ 'opacity': '1' }, 3000);

        }
    });
});

self.loaderSpinner();