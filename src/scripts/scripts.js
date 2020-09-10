var app = {

    init: function() {
        // app.menu();
        // app.modal();
        app.sliders();
        app.compare();
        // app.lazyload();
        // app.preloader();
        // app.formValidation();
        // app.phoneMask();
        // app.section_services();
    }, // init END

    menu: function() {

        // $('.menu-toggle').on('click', function(e) {
        //     e.preventDefault();
        //     $('.hamburger').toggleClass('active');
        //     $('body').toggleClass('site-menu-open');
        // });

    }, // menu END

    sliders: function() {

        var $homeIntroSlider = $('#home-intro-slider');
        if (!$homeIntroSlider) {} else {

            var homeIntroCarousel = new Swiper('#home-intro-slider', {
                // Default parameters
                // slidesPerView: 1,
                // slidesPerColumn: 2,
                initialSlide: 0,
                spaceBetween: 0,
                // Responsive breakpoints
                navigation: {
                    nextEl: '#testimonials-carousel-button-next',
                    prevEl: '#testimonials-carousel-button-prev',
                },
                on: {
                    init: function () {
                      /* do something */
                      $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }

        var $testimonialsSlider = $('#testimonials-carousel');
        if (!$testimonialsSlider) {} else {

            var testimonialsCarousel = new Swiper('#testimonials-carousel .swiper-container', {
                // Default parameters
                // slidesPerView: 1,
                // slidesPerColumn: 2,
                initialSlide: 1,
                centeredSlides: true,
                spaceBetween: 0,
                // Responsive breakpoints
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1280: {
                        slidesPerView: 3
                    },
                    // when window width is >= 1440px
                    1440: {
                        slidesPerView: 3
                        // allowTouchMove: false

                    }
                },
                navigation: {
                    nextEl: '#testimonials-carousel-button-next',
                    prevEl: '#testimonials-carousel-button-prev',
                },
                on: {
                    init: function () {
                      /* do something */
                      $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }

        var $certificatesSlider = $('#certificates-slider');
        if (!$certificatesSlider) {} else {

            var certificatesCarousel = new Swiper('#certificates-slider', {
                // Default parameters
                slidesPerView: 1,
                // slidesPerColumn: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '#certificates-slider-button-next',
                    prevEl: '#certificates-slider-button-prev',
                },
                pagination: {
                    el: '#certificates-slider-pagination',
                    type: 'fraction',
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' / ' + '<span class="' + totalClass + '"></span>';
                },
                on: {
                    init: function () {
                      /* do something */
                      // $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }

        var $homeGallerySlider = $('#home-gallery-slider');
        if (!$homeGallerySlider) {} else {

            var homeGalleryCarousel = new Swiper('#home-gallery-slider', {
                // Default parameters
                slidesPerView: 1,
                // slidesPerColumn: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '#home-gallery-slider-button-next',
                    prevEl: '#home-gallery-slider-button-prev',
                },
                pagination: {
                    el: '#home-gallery-slider-pagination',
                    type: 'fraction',
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' / ' + '<span class="' + totalClass + '"></span>';
                },
                on: {
                    init: function () {
                      /* do something */
                      // $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }
    }, // sliders END


    compare: function() {

        var $compare = $('#compare');
        if (!$compare) {} else {

            $(function () {
                var imagesCompareElement = $('.js-img-compare').imagesCompare();
                var imagesCompare = imagesCompareElement.data('imagesCompare');
                var events = imagesCompare.events();

                // imagesCompare.on(events.changed, function (event) {
                //     console.log(events.changed);
                //     console.log(event.ratio);
                //     if (event.ratio < 0.4) {
                //         console.log('We see more than half of the back image');
                //     }
                //     if (event.ratio > 0.6) {
                //         console.log('We see more than half of the front image');
                //     }

                //     if (event.ratio <= 0) {
                //         console.log('We see completely back image');
                //     }

                //     if (event.ratio >= 1) {
                //         console.log('We see completely front image');
                //     }
                // });

                $('.js-front-btn').on('click', function (event) {
                    event.preventDefault();
                    imagesCompare.setValue(1, true);
                });

                $('.js-back-btn').on('click', function (event) {
                    event.preventDefault();
                    imagesCompare.setValue(0, true);
                });

                $('.js-toggle-btn').on('click', function (event) {
                    event.preventDefault();
                    if (imagesCompare.getValue() >= 0 && imagesCompare.getValue() < 1) {
                        imagesCompare.setValue(1, true);
                    } else {
                        imagesCompare.setValue(0, true);
                    }
                });
            });
        }

    }, // compare END
}

jQuery(document).ready(function($) {
    console.log( 'Документ и все ресурсы загружены' );
    app.init();

    $(".accordion-trigger").QuickAccord();

});

