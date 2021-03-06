function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}

include('js/jquery.cookie.js');

/* Stick up menu
 ========================================================*/
include('js/tmstickup.js');
$(window).load(function () {
    $('#stuck_container').TMStickUp({
    })
});

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
 ========================================================*/
include('js/jquery.ui.totop.js');
$(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
});


/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('js/device.min.js');
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () {
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll({
            step: 150,
            speed: 800
        });
    }
});


/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});


/* Superfish menu
 ========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');


/* Orientation tablet fix
 ========================================================*/
$(function () {
// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM)
        if (!result) {
            $('.sf-menu li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');


$(document).ready(function () {
    if ($('#camera_1').length > 0) {
        $('#camera_1').camera({

            thumbnails: false,
            height: '754px',
            pagination: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: true,
            navigationHover: false,
            fx: 'scrollLeft, scrollRight'
        });
    }

    if ($('#camera_2').length > 0) {
        $('#camera_2').camera({
            autoAdvance: false,
            thumbnails: false,
            height: '252px',
            pagination: false,
            playPause: false,
            hover: false,
            loader: 'none',
            navigation: false,
            navigationHover: false,
            fx: 'scrollLeft, scrollRight'
        });
    }

    if ($('a[data-type="lightbox"]').length > 0) {
        $('a[data-type="lightbox"]').touchTouch();
    }
});






