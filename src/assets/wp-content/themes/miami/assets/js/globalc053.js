/*-------------------------------------------------------------------------------------------------------------------------------*/
/*This is main JS file that contains custom style rules used in this template*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* Template Name: Miami*/
/* Version: 1.0 Initial Release*/
/* Build Date: 15-10-2016*/
/* Author: FOXTHEMES*/
/* Website: http://foxthemes.com/
/* Copyright: (C) 2016 */
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/* 02 - PAGE CALCULATIONS */
/* 03 - FUNCTION ON DOCUMENT READY */
/* 04 - FUNCTION ON PAGE LOAD */
/* 05 - FUNCTION ON PAGE RESIZE */
/* 06 - FUNCTION ON PAGE SCROLL */
/* 07 - SWIPER SLIDERS */
/* 08 - BUTTONS, CLICKS, HOVERS */
/* 09 - TIMES, TABS */
/* 10 - LIGHT-BOX */
/* 11 - STYLE BAR */
/* 12 - GOOGLE MAP */

/*-------------------------------------------------------------------------------------------------------------------------------*/

jQuery(function() {

    "use strict";

    var $ = jQuery;



    /*================*/
    /* 01 - VARIABLES */
    /*================*/
    var swipers = [],
        winW, winH, winScr, _isresponsive, xsPoint = 480,
        smPoint = 768,
        mdPoint = 992,
        lgPoint = 1200,
        addPoint = 1600,
        _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

    /*========================*/
    /* 02 - PAGE CALCULATIONS */
    /*========================*/
    function pageCalculations() {
        winW = $(window).width();
        winH = $(window).height();
        if ($('.cmn-toggle-switch').is(':visible')) _isresponsive = true;
        else _isresponsive = false;
    }

    /*=================================*/
    /* 03 - FUNCTION ON DOCUMENT READY */
    /*=================================*/
    pageCalculations();
    //center all images inside containers
    $('.center-image').each(function() {
        var bgSrc = $(this).attr('src');
        $(this).parent().addClass('background-block').css({ 'background-image': 'url(' + bgSrc + ')' });
        $(this).hide();
    });



    /*============================*/
    /* 04 - FUNCTION ON PAGE LOAD */
    /*============================*/
    $(window).on('load', function() {
        $('#loading').fadeOut();

        if ($('#map-canvas').length) {
            $('.map-block').each(function() {
                initialize(this);
            });
        }
		

        initSwiper();
        wpc_add_img_bg('.s-img-switch');
        bannerPagination();

        

        $('.popup-close').on('click', function() {
            $(this).parent().hide('slow');
        });
		
		isotopGalleryFunction();
        isotopShop();
		isotopGalleryBlogFunction();
		isotopContainerGalleryFunction();

        animatedBlock();

    });

    function sampleHeight() {
        if ($(window).width() > 991 && $('.testimoanial-item .content').length) {
            $('.testimoanial-item .content').css('height', 'auto').equalHeights();
        } else {
            $('.testimoanial-item .content').css('height', 'auto');
        }
        if ($(window).width() > 991 && $('.service-block.service-entry').length) {
            $('.service-block.service-entry').css('height', 'auto').equalHeights();
        } else {
            $('.service-block.service-entry').css('height', 'auto');
        }
    }

    sampleHeight();

    $('.widget_search input[type="submit"]').attr('value', '').wrap('<div class="search-wrap"></div>');
    $('.comments input[type="submit"]').wrap('<div class="sub-wrap"></div>');

	if( $('.single-post .content').length ) {
	   $('.single-post .content').fitVids(); 
    }
	
	$('.single-post .content p').each(function(){
        var $this = $(this);
        if( $this.find('iframe') ) {
            $this.css('opacity', 1);
        }
    });
	
    /*==============================*/
    /* 05 - FUNCTION ON PAGE RESIZE */
    /*==============================*/
    function resizeCall() {
        pageCalculations();

        $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function() {
            var thisSwiper = swipers['swiper-' + $(this).attr('id')],
                $t = $(this),
                slidesPerViewVar = updateSlidesPerView($t),
                centerVar = thisSwiper.params.centeredSlides;
            thisSwiper.params.slidesPerView = slidesPerViewVar;
            thisSwiper.reInit();
            if (!centerVar) {
                var paginationSpan = $t.find('.pagination span');
                var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
                if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
                else $t.removeClass('pagination-hidden');
                paginationSlice.show();
            }
        });
    }
    if (!_ismobile) {
        $(window).resize(function() {
            resizeCall();
        });
    } else {
        window.addEventListener("orientationchange", function() {
            resizeCall();
        }, false);
    }

    window.addEventListener("orientationchange", function() {
        initSwiper();
        bannerPagination();
        counterPagination();
        bodyPaddingTop();
        sampleHeight();  
		isotopGalleryFunction();
        isotopShop();
		isotopGalleryBlogFunction();
		isotopContainerGalleryFunction()
    }, false);

    /*==============================*/
    /* 06 - FUNCTION ON PAGE SCROLL */
    /*==============================*/
    $(window).scroll(function() {
        animatedBlock();
    });


    /*=====================*/
    /* 07 - SWIPER SLIDERS */
    /*=====================*/
    function initSwiper() {
        var initIterator = 0;
        $('.swiper-container').each(function() {
            var $t = $(this);

            var index = 'swiper-unique-id-' + initIterator;

            $t.addClass('swiper-' + index + ' initialized').attr('id', index);
            $t.find('.pagination').addClass('pagination-' + index);

            var autoPlayVar = parseInt($t.attr('data-autoplay'), 10);
            var mode = $t.attr('data-mode');
            var slidesPerViewVar = $t.attr('data-slides-per-view');
            if (slidesPerViewVar == 'responsive') {
                slidesPerViewVar = updateSlidesPerView($t);
            } else slidesPerViewVar = parseInt(slidesPerViewVar, 10);

            var loopVar = parseInt($t.attr('data-loop'), 10);
            var speedVar = parseInt($t.attr('data-speed'), 10);
            var centerVar = parseInt($t.attr('data-center'), 10);
            swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
                speed: speedVar,
                pagination: '.pagination-' + index,
                loop: loopVar,
                paginationClickable: true,
                autoplay: autoPlayVar,
                slidesPerView: slidesPerViewVar,
                keyboardControl: true,
                calculateHeight: true,
                simulateTouch: true,
                roundLengths: true,
                centeredSlides: centerVar,
                mode: mode || 'horizontal',
                onInit: function(swiper) {
                    $t.find('.swiper-slide').addClass('active');
                },
                onSlideChangeEnd: function(swiper) {
                    var activeIndex = (loopVar === 1) ? swiper.activeLoopIndex : swiper.activeIndex;
                    var arr = $t.find('.swiper-pagination-switch');
                    $(arr[activeIndex]).addClass('swiper-active-switch');

                },
                onSlideChangeStart: function(swiper) {
                    $t.find('.swiper-slide.active').removeClass('active');
                    $t.find('.swiper-pagination-switch.swiper-active-switch').removeClass('swiper-active-switch');
                }
            });
            swipers['swiper-' + index].reInit();
            if ($t.attr('data-slides-per-view') == 'responsive') {
                var paginationSpan = $t.find('.pagination span');
                var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
                if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
                else $t.removeClass('pagination-hidden');
                paginationSlice.show();
            }

            if ($t.find('.default-active').length) {
                swipers['swiper-' + index].swipeTo($t.find('.swiper-slide').index($t.find('.default-active')), 0);
            }

            initIterator++;
        });

    }

    function updateSlidesPerView(swiperContainer) {
        if (winW >= addPoint) return parseInt(swiperContainer.attr('data-add-slides'), 10);
        else if (winW >= lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'), 10);
        else if (winW >= mdPoint) return parseInt(swiperContainer.attr('data-md-slides'), 10);
        else if (winW >= smPoint) return parseInt(swiperContainer.attr('data-sm-slides'), 10);
        else return parseInt(swiperContainer.attr('data-xs-slides'), 10);
    }


    //swiper arrows
    $('.swiper-arrow-left').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipePrev();
    });

    $('.swiper-arrow-right').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipeNext();
    });

    $('.swiper-outer-left').on('click', function() {
        swipers['swiper-' + $(this).parent().find('.swiper-container').attr('id')].swipePrev();
    });

    $('.swiper-outer-right').on('click', function() {
        swipers['swiper-' + $(this).parent().find('.swiper-container').attr('id')].swipeNext();
    });



    function bodyPaddingTop() {
        $('.blog-banner .block-header.vertical-align').css('padding-top', $('.header').height() + 'px');
        $('.blog-banner').css('padding-top', $('.header').height() + 'px');

    }

    //change image on speaker
    $(document).on({
        mouseenter: function() {
            var img = $(this).data("image");
            var $img_block = $(this).parents('.swiper-slide').find('.speaker-img');
            $img_block.css({ 'background-image': 'url(' + img + ')' });
        },
        mouseleave: function() {
            var $img_block = $(this).parents('.swiper-slide').find('.speaker-img');
            var img_orig = $img_block.find('img').attr('src');
            $img_block.css({ 'background-image': 'url(' + img_orig + ')' });
        }
    }, ".speaker-change img");


    //Tabs
    var tabFinish = 0;
    $(document).on('click', '.nav-tab-item', function() {
        var $t = $(this);
        if (tabFinish || $t.hasClass('active')) return false;
        tabFinish = 1;
        $t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
        $t.addClass('active');
        var index = $t.parent().parent().find('.nav-tab-item').index(this);
        $t.closest('.tab-wrapper').find('.tab-info:visible').fadeOut(500, function() {
            $t.closest('.tab-wrapper').find('.tab-info').eq(index).fadeIn(500, function() {
                tabFinish = 0;
                resizeCall();
            });
        });
    });

    /*=====================*/
    /* 10 - LIGHT-BOX */
    /*=====================*/

    /*activity indicator functions*/
    var activityIndicatorOn = function() {
        $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
    };
    var activityIndicatorOff = function() {
        $('#imagelightbox-loading').remove();
    };

    /*close button functions*/
    var closeButtonOn = function(instance) {
        $('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function() { $(this).remove();
            instance.quitImageLightbox();
            return false; });
    };
    var closeButtonOff = function() {
        $('#imagelightbox-close').remove();
    };

    /*overlay*/
    var overlayOn = function() { $('<div id="imagelightbox-overlay"></div>').appendTo('body'); };
    var overlayOff = function() { $('#imagelightbox-overlay').remove(); };

    /*caption*/
    var captionOff = function() { $('#imagelightbox-caption').remove(); };
    var captionOn = function() {
        var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
        if (description.length > 0)
            $('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
    };

    /*arrows*/
    var arrowsOn = function(instance, selector) {
        var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
        $arrows.appendTo('body');
        $arrows.on('click touchend', function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
                index = $target.index(selector);
            if ($this.hasClass('imagelightbox-arrow-left')) {
                index = index - 1;
                if (!$(selector).eq(index).length)
                    index = $(selector).length;
            } else {
                index = index + 1;
                if (!$(selector).eq(index).length)
                    index = 0;
            }
            instance.switchImageLightbox(index);
            return false;
        });
    };
    var arrowsOff = function() { $('.imagelightbox-arrow').remove(); };

    var selectorG = '.lightbox';
    var instanceG = $(selectorG).imageLightbox({
        quitOnDocClick: false,
        onStart: function() { arrowsOn(instanceG, selectorG);
            overlayOn();
            closeButtonOn(instanceG); },
        onEnd: function() { arrowsOff();
            captionOff();
            overlayOff();
            closeButtonOff();
            activityIndicatorOff(); },
        onLoadStart: function() { captionOff();
            activityIndicatorOn(); },
        onLoadEnd: function() { $('.imagelightbox-arrow').css('display', 'block');
            captionOn();
            activityIndicatorOff(); }
    });

    /*==================================================*/
    /* 12 - GOOGLE MAP */
    /*==================================================*/
    function initialize(_this) {

        var stylesArray = {

            //style 1
            'style-1': [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 50 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#1B1C2C" }, { "lightness": 10 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 0 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 1 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 1 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 2 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 9 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 10 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 10 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#1B1C2C" }, { "lightness": 8 }] }]
        };

        var styles, map, marker, infowindow,
            lat = $(_this).attr("data-lat"),
            lng = $(_this).attr("data-lng"),
            marker_content = $(_this).find('.footer-marker-content').html(),
            image = $(_this).attr("data-marker"),
            styles_attr = $(_this).attr("data-style"),
            zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
            myLatlng = new google.maps.LatLng(lat, lng);


        console.log(marker_content);


        // style_1
        if (styles_attr == 'style-1') {
            styles = stylesArray[styles_attr];
        }
        // custom
        if (typeof miami_style_map != 'undefined' && styles_attr == 'custom') {
            styles = miami_style_map;
        }
        // or default style

        var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

        var mapOptions = {
            zoom: zoomLevel,
            disableDefaultUI: true,
            center: myLatlng,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };

        map = new google.maps.Map(_this, mapOptions);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        infowindow = new google.maps.InfoWindow({
            content: marker_content
        });


        marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }

    /*

    // FOR WP

    */

    function headerPosition() {
        if ($(window).width() < 601) {
            if ($(window).scrollTop() < 47) {
                $('.admin-bar header').css({ 'top': 46 - $(window).scrollTop() });
            } else {
                $('.admin-bar header').css({ 'top': 0 })
            }
        } else {
            if ($(window).width() < 769) {
                $('.admin-bar header').css({ 'top': '46px' });
            } else {
                $('.admin-bar header').css({ 'top': '32px' })
            }
        }
    }

    //popup
    $(document).on("click", '.register-link', function() {
        var find_container = $('body');
        if ($(this).closest('.vc_column_container')) {
            find_container = $(this).closest('.vc_column_container');
        }
        find_container.find('.register-popup').show('slow');

        return false;
    });

    $(window).on('resize', function() {
        sampleHeight(); 
		isotopGalleryFunction();
        isotopShop();
		isotopGalleryBlogFunction();
		isotopContainerGalleryFunction()
    });

    $(window).on('load resize', function() {
        headerPosition();
        initSwiper();
        bannerPagination();
        counterPagination();
        bodyPaddingTop();

    });
	
	/*Isotop galleries*/
    var $isotopContainerShop = $('.archive.post-type-archive.post-type-archive-product ul.products');
    function isotopShop(){
        if ($isotopContainerShop) {
            $isotopContainerShop.each(function() {
                var self = $(this);
                self.isotope({
                    itemSelector: '.archive.post-type-archive.post-type-archive-product ul.products > li',
                    layoutMode: 'masonry'
                });
            });
        }
    }
	var $isotopContainer = $('.isotope-container');
	function isotopGalleryFunction(){
		if ($isotopContainer) {
			$isotopContainer.each(function() {
				var self = $(this);
				self.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'masonry'
				});
			});
		}
	}
	
	
	var $isotopBlogContainer = $('.isotope-container-blog');
	function isotopGalleryBlogFunction(){
		if ($isotopBlogContainer) {
			$isotopBlogContainer.isotope({ percentPosition: true, itemSelector: '.blog-content-item' });
		}
	}
	
	var $isotopContainerGallery = $('.isotope-container_gallery');
	function isotopContainerGalleryFunction() {
		if ($isotopContainerGallery) {
			$isotopContainerGallery.isotope({
				itemSelector: '.item',
				masonry: { gutter: 0, columnWidth: '.grid-sizer' }
			});
		}
	}
	
    /***********************************/
    /* BACKGROUND*/
    /**********************************/

    //sets child image as a background
    function wpc_add_img_bg(img_sel, parent_sel) {

        if (!img_sel) {
            console.info('no img selector');
            return false;
        }

        var $parent, $imgDataHidden, _this;

        $(img_sel).each(function() {
            _this = $(this);
            $imgDataHidden = _this.data('s-hidden');
            $parent = _this.closest(parent_sel);
            $parent = $parent.length ? $parent : _this.parent();
            $parent.css('background-image', 'url(' + this.src + ')').addClass('s-back-switch');
            if ($imgDataHidden) {
                _this.css('visibility', 'hidden');
            } else {
                _this.hide();
            }
        });

    }

    /***********************************/
    /* BANNER PAGINATION*/
    /**********************************/
    function bannerPagination() {
        if ($('.banner-slider-wrap').length) {
            $('.banner-slider-wrap').each(function(index) {
                var top = $(this).find('.swiper-slide').height() / 2;
                $(this).find('.pagination').css('top', top + 'px');
            });
        }
    }


    /***********************************/
    /* COUNTER PAGINATION*/
    /**********************************/

    function counterPagination() {
        if ($('.pagination.custom').length) {
            $('.pagination.custom').each(function(index) {
                $(this).find('span').each(function(index) {
                    if ((index + 1) < 10) {
                        $(this).html('0' + (index + 1));
                    } else {
                        $(this).html((index + 1));
                    }
                });
            });
        }
    }

    /***********************************/
    /* TABS */
    /**********************************/

    $('.tabs-header > ul > li > a').on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('active')) {
            var index_el = $(this).parent().index();

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().closest('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
        } else {
            return false
        }

    });

    $('.tabs-header2 > ul > li > a').on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('active')) {
            var index_el = $(this).parent().index();

            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().closest('.tabs2').find('.tabs-item2').removeClass('active').eq(index_el).addClass('active');
            return false
        } else {
            return false
        }

    });

    /***********************************/
    /* ANIMATION */
    /**********************************/

    function animatedBlock() {
        var scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            animatedBlock = $('.animatedBlock'),
            animNavigation = $('.add_animation .blog-list .navigation'),
            animBlockText = $('.add_animation .block-text'),
            animBlockTitle = $('.add_animation .block-title'),
            animWidget = $('.add_animation .widget'),
            animBlogContentItem = $('.add_animation .blog-content-item'),
            animWrapImage = $('.add_animation .wrapper-image'),
            animContentImage = $('.add_animation .content img'),
            animPostContentP = $('.add_animation .post-content .content p, .add_animation .post-content .content address, .add_animation .post-content .content pre, .add_animation .post-content .content .post-nav'),
            animPostContentFigure = $('.add_animation .post-content .content figure'),
            animPostContentFigureCaption = $('.add_animation .post-content .content figcaption'),
            animPostContentUl = $('.add_animation .post-content .content > ul, .add_animation .post-content .content > ol, .add_animation .post-content .content > dl'),
            animPostContentHeading = $('.add_animation .post-content .content h1, .add_animation .post-content .content h2, .add_animation .post-content .content h3, .add_animation .post-content .content h4, .add_animation .post-content .content h5, .add_animation .post-content .content h6'),
            animContentBlockquote = $('.add_animation .content blockquote'),
            animContentTable = $('.add_animation .content table'),
            animSingleCategory = $('.add_animation .single-category'),
            animPaginSingle = $('.add_animation .pagination-single');
        if (animatedBlock.length) {
            animatedBlock.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animNavigation.length) {
            animNavigation.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animBlockText.length) {
            animBlockText.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animBlockTitle.length) {
            animBlockTitle.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animWidget.length) {
            animWidget.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animBlogContentItem.length) {
            animBlogContentItem.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animWrapImage.length) {
            animWrapImage.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animContentImage.length) {
            animContentImage.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animPostContentP.length) {
            animPostContentP.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
		if (animPostContentFigure.length) {
            animPostContentFigure.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
		if (animPostContentFigureCaption.length) {
            animPostContentFigureCaption.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
		if (animPostContentUl.length) {
            animPostContentUl.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
		if (animPostContentHeading.length) {
            animPostContentHeading.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animContentBlockquote.length) {
            animContentBlockquote.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
		if (animContentTable.length) {
            animContentTable.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animSingleCategory.length) {
            animSingleCategory.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }
        if (animPaginSingle.length) {
            animPaginSingle.not('.animated').each(function() {
                if (scrollTop >= $(this).offset().top - windowHeight * 1) {
                    $(this).css({ 'transform': 'translateY(0px)' })
                }
            });
        }

    }

    /*Change AJAX Loader*/
    $.fn.changeAjaxLoader = function() {
        return this.each(function() {
            var loader = $('<i class="ajax-loader-custom fa fa-spinner fa-spin" aria-hidden="true"></i>').css('visibility', 'hidden');

            $(this).after(loader);
        });
    };

    $('.wpcf7-submit').changeAjaxLoader();

    // Show new spinner on Send button click
    $('.wpcf7-submit').on('click', function() {
        $('.ajax-loader-custom').css({ visibility: 'visible' });
    });

    // Hide new spinner on result
    $('div.wpcf7').on('wpcf7:invalid wpcf7:spam wpcf7:mailsent wpcf7:mailfailed', function() {
        $('.ajax-loader-custom').css({ visibility: 'hidden' });
    });


    /*Gradient button home-3 banner*/
    function changeGradientWidth() {
        var gradientButton = $('.gradient-btn'),
            svgPath = gradientButton.find('svg path'),
            labelWidth = gradientButton.find('.text-label').outerWidth(),
            pathForm = 'M27,52 a24,24 0 0,1 0,-48 h' + (labelWidth - 53) + ' a24,24 0 1,1 0,48 h-' + (labelWidth - 53);
        svgPath.attr('d', pathForm);
    }

    changeGradientWidth();

    /*Video banner*/
    $('.video_banner').each(function() {
            var videoWrap = $(this),
                videoPopUp = videoWrap.find('.video_popup'),
                buttonPlay = videoWrap.find('.video-gradient-btn'),
                videoIframe = videoPopUp.find('iframe'),
                iframeSrc = videoIframe.attr('src'),
                iframeDataSrc = videoIframe.attr('data-src'),
                closePlayButton = videoPopUp.find('.close-btn');

            buttonPlay.on('click', function(e) {
                e.preventDefault();
                videoPopUp.addClass('active');
                videoIframe.attr('src', iframeDataSrc);
            })

            closePlayButton.on('click', function() {
                videoPopUp.removeClass('active');
                videoIframe.attr('src', iframeSrc);
            })

        })
        /*Mobile menu*/
    var mainMenu = $('.main-nav'),
        button = $('.cmn-toggle-switch'),
        mobileLogoHeight = $('.logo-block.mobile').outerHeight() + 10 + 'px',
        body = $('body, html');

    function mobileMenu() {
 
        if ($(window).width() < 768) {
            mainMenu.attr('style', 'max-height: 0px;');
            button.removeClass('active');
        } else {
            mainMenu.attr('style', '');
        }

        button.on('click', function() { 
            if (mainMenu.hasClass('active')) { 
                button.removeClass('active')
                mainMenu.css({ 'max-height': '0px', 'padding-bottom': '0px' }).removeClass('active');
                body.removeClass('overflow');
            } else { 
                button.addClass('active')
                mainMenu.css({ 'max-height': '100vh', 'padding-bottom': mobileLogoHeight }).addClass('active');
                body.addClass('overflow');
            }

            $('.main-nav ul li a').on('click', function() {
                button.removeClass('active');
                body.removeClass('overflow');
                mainMenu.css({ 'max-height': '0px', 'padding-bottom': '0px' }).removeClass('active');
            })

        })

    }

    mobileMenu();


    /* Reservation form */
    $('.reservation-plugin form').submit(function(){
        var $form = $(this),
            $form_wrapper = $form.closest('.form-wrapper'),
            form_data = {};

            $form.find("input[name], select[name]").each(function (index, node) {
                form_data[node.name] = node.value;
            });

        $.ajax({
            type: "POST",
            url: js_data.ajaxurl,
            data: form_data,
            success: function( msg ) {
                var data = $.parseJSON( msg );
                if( data.type == 'success' ) {
                    $form_wrapper.html( data.text );
                } else {
                    $form_wrapper.find('.contact').append('<p class="request-error">' + data.text + '</p>');
                }
            }
        });            
        return false;
    });
    /* End reservation form */

    // EQUAL HEIGHT
    function eqHeight() {
        var maxHeight = 0;
        $(".miami-shortcode-blog .item-blog .blog-content").each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        $(".miami-shortcode-blog .item-blog .blog-content").css('height', maxHeight);
    }

    eqHeight();

    /* Remove WOOCOMMERCE link */
    if( $('.woocommerce-cart').length ) {
        $('.shop_table.cart tbody .cart_item').each(function(){
            var $this = $(this);
            $this.find('.product-name').text( $this.find('.product-name a').text() );
        });
    }
    /* End remove WOOCOMMERCE link */

});
