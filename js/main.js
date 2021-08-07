//==============================
//    Owl Slider
//===============================

$('.owl-slider').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 6
        },
        1000: {
            items: 8
        }
    }
})


//==============================
//    Owl Slider
//===============================

$('.owl-delivery').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})


//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })

})
