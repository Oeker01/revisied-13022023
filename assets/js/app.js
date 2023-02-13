$(function () {

    var $popupSelectorSingle    = $('[data-popup="image"]')
        , $popupSelectorGallery = $('[data-popup="gallery"]')
        , $mobileMenu           = $('#mobile-menu')
        , $mobileMenuToggle     = $('#mobileMenuToggle')
        , $slider               = $('#slider')
        , $news                 = $('#news')
        , $references           = $('#references')
        , mobileMenuAPI;

        var $popup = $('#popup');  

    // Magnific Popup
    if ($.fn.magnificPopup) {

        $popupSelectorSingle.magnificPopup({
            type   : 'image',
            gallery: {
                enabled: false
            }
        });

        $popupSelectorGallery.magnificPopup({
            type   : 'image',
            gallery: {
                enabled: true
            }
        });

        if($popup.length) {
            $.magnificPopup.open({
                items: {
                    src: '#popup',
                    type: 'inline'
                }
            });
        }
    }

    // Slider
    if ($slider.length) {
        $slider.masterslider({
            width: 1903,
            layout: "fillwidth",
            autoHeight: true,
            autoplay: true,
            loop: true,
            shuffle: true,
            overPause: false,
            view: 'fade',
            instantStartLayers: true,
            controls: {}
        });

        var $sliderInstance = $slider.masterslider('slider');
        MSScrollParallax.setup($sliderInstance, 50, 80, true);
    }

    // News & References
    if ($.fn.slick()) {
        $news.slick({
            infinite      : true,
            slidesToShow  : 1,
            slidesToScroll: 1,
            autoplay      : false,
            autoplaySpeed : 2000,
            responsive    : [
                {
                    breakpoint: 1024,
                    settings  : {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings  : {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings  : {
                        slidesToShow: 1
                    }
                }],
            dots          : false,
            appendArrows  : '.news .arrows',
            prevArrow     : '<a href="javascript:;"><em class="fa fa-chevron-left"></em></a> ',
            nextArrow     : '<a href="javascript:;"><em class="fa fa-chevron-right"></em></a>'
        });
        $references.slick({
            infinite      : true,
            slidesToShow  : 7,
            slidesToScroll: 1,
            autoplay      : false,
            autoplaySpeed : 2000,
            responsive    : [
                {
                    breakpoint: 1024,
                    settings  : {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings  : {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings  : {
                        slidesToShow: 1
                    }
                }],
            dots          : false
        });

    }

    // Mobil menü
    if ($mobileMenu.length) {
        $mobileMenu.mmenu({
            extensions: [
                'effect-menu-slide',
                'shadow-page',
                'shadow-panels'],
            onClick   : {
                blockUI: true,
                close  : false
            },
            offCanvas : {
                position: 'right'
            },
            navbar    : {
                title: 'MENU'
            }
        });

        mobileMenuAPI = $mobileMenu.data('mmenu');

        $mobileMenuToggle.click(function () {
            if ($mobileMenu.hasClass('mm-opened')) {
                mobileMenuAPI.close();
            }
        });

    }

});