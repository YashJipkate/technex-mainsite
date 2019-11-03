/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	if ($('body').hasClass('wp-customizer')) {

	// Main color
	wp.customize( 'main_color', function( value ) {

		value.bind( function( to ) {
				if ( to ) { 
					var style = ''+
                    '.a-btn,'+
                    'button,'+
                    'button[disabled]:hover,'+
                    'button[disabled]:focus,'+
                    'input[type="button"],'+
                    'input[type="button"][disabled]:hover,'+
                    'input[type="button"][disabled]:focus,'+
                    'input[type="reset"],'+
                    'input[type="reset"][disabled]:hover,'+
                    'input[type="reset"][disabled]:focus,'+
                    'input[type="submit"],'+
                    'input[type="submit"][disabled]:hover,'+
                    'input[type="submit"][disabled]:focus,'+
                    '.banner-slider-wrap .pagination span.swiper-active-switch,'+
                    '.custom-popup,'+
                    '.pagination.custom span.swiper-active-switch::after,'+
                    '.service-block:hover,'+
                    '#imagelightbox-close:hover,'+
                    '#imagelightbox-caption,'+
                    '.events-wrapper .tabs-header2 ul li.active::after, '+
                    '.events-wrapper .tabs-header2 ul li:hover::after,'+
                    '.contacts,'+
                    '.events-wrapper .tabs-content2 .colum .price::before,'+
                    '.banner-slider-wrap .left-block .date,'+
                    '.banner-slider-wrap .right-block .event_btn:hover,'+
                    '.team-social a:hover,'+
					'.service-block:hover'+
                    '.banner-slider-wrap .right-block .event_btn:before { background:' + to + ';}'+
                    '@media screen and (max-width: 600px){'+
                        '.events-wrapper .tabs-header2 ul li.active a,'+
                        '.events-wrapper .tabs-header2 ul li:hover a { background-color:' + to + ';}}'+
                    '.imagelightbox-arrow:hover,'+
                    '.a-btn:hover, '+
                    'button:hover, '+
                    'button[disabled]:hover, '+
                    'button[disabled]:focus:hover, '+
                    'input[type="button"]:hover, '+
                    'input[type="button"][disabled]:hover, '+
                    'input[type="button"][disabled]:focus:hover, '+
                    'input[type="reset"]:hover, '+
                    'input[type="reset"][disabled]:hover, '+
                    'input[type="reset"][disabled]:focus:hover, '+
                    'input[type="submit"]:hover, '+
                    'input[type="submit"][disabled]:hover, '+
                    'input[type="submit"][disabled]:focus:hover,'+
                    '.a-btn:hover i,'+
                    'button:hover i,'+
                    'button[disabled]:hover:hover i,'+
                    'button[disabled]:focus:hover i,'+
                    'input[type="button"]:hover i,'+
                    'input[type="button"][disabled]:hover:hover i,'+
                    'input[type="button"][disabled]:focus:hover i,'+
                    'input[type="reset"]:hover i,'+
                    'input[type="reset"][disabled]:hover:hover i,'+
                    'input[type="reset"][disabled]:focus:hover i,'+
                    'input[type="submit"]:hover i,'+
                    'input[type="submit"][disabled]:hover:hover i,'+
                    'input[type="submit"][disabled]:focus:hover i,'+
                    '.comments .sub-wrap:hover::before,'+
                    '.block-header .block-icon .miami-icon,'+
                    '.service-block .block-icon .miami-icon,'+
                    'body span.wpcf7-not-valid-tip { color: ' + to + ';}'+
                    '.cssload-cssload-spinner:before,'+
                    '.events-wrapper .tabs-header2 li.active a::before,'+
                    '.events-wrapper .tabs-header2 li:hover a::before,'+
                    '.a-btn:hover,'+
                    'button:hover,'+
                    'button[disabled]:hover:hover,'+
                    'button[disabled]:focus:hover,'+
                    'input[type="button"]:hover,'+
                    'input[type="button"][disabled]:hover:hover,'+
                    'input[type="button"][disabled]:focus:hover,'+
                    'input[type="reset"]:hover,'+
                    'input[type="reset"][disabled]:hover:hover,'+
                    'input[type="reset"][disabled]:focus:hover,'+
                    'input[type="submit"]:hover,'+
                    'input[type="submit"][disabled]:hover:hover,'+
                    'input[type="submit"][disabled]:focus:hover,'+
                    '.banner-slider-wrap .right-block .event_btn { border-color: ' + to + ';}';
 	
					if ($('.main_color').length) {
						$('.main_color').html(style);
					} else {
						$( 'head' ).append('<style class="main_color">' + style + '</style>');
					}
				}

		} );
	} );


	// Front Color Text
	wp.customize( 'front_color_settings', function( value ) {

		value.bind( function( to ) {
			if ( to ) {
				var style = '' +
                'body,'+
                '.wp-caption .wp-caption-text,'+
                '.page-links a,'+
                '.a-btn,'+
                'button,'+
                'button[disabled]:focus,'+
                'input[type="button"],'+
                'input[type="button"][disabled]:focus,'+
                'input[type="reset"],'+
                'input[type="reset"][disabled]:focus,'+
                'input[type="submit"],'+
                'input[type="submit"][disabled]:focus,'+
                '.post-password-form label,'+
                '.gallery-caption,'+
                '.wp-caption .wp-caption-text,'+
                '.post-nav > span:first-child,'+
                '.post-nav > .pages,'+
                '.post-nav a:hover,'+
                '.post-nav a,'+
                '.a-btn,'+
                'button,'+
                'input[type="button"] i,'+
                'input[type="reset"] i,'+
                'input[type="submit"] i,'+
                '.banner-wrap .content .subtitle,'+
                '.banner-wrap .content .title,'+
                '.banner-wrap .content .text,'+
                '.banner-slider-wrap .slider-content .title,'+
                '.banner-slider-wrap .slider-content .text,'+
                '.custom-popup input[type="submit"],'+
                '.custom-popup .submit-wrap:hover input,'+
                '.custom-popup .submit-wrap i,'+
                '.popup-close,'+
                '.popup-close:hover,'+
                '.c-form-label,'+
                '.popup-title,'+
                '.block-title,'+
                '.block-text,'+
                '.about-title,'+
                '.about-text,'+
                '.pagination.custom span,'+
                '.team-item .descr,'+
                '.team-social a,'+
                '.team-social a:hover,'+
                '.service-block,'+
                '.gal-title,'+
                '.gal-subtitle,'+
                '.wpcf7 input:not([type="submit"]),'+
                '.wpcf7 textarea,'+
                '.wpcf7 .submit-wrapper .submit-wrap i,'+
                '.testimoanial-item .content,'+
                '.testimoanial-item .testimoanial-title,'+
                '.testimoanial-item .testimoanial-text,'+
                '.copy,'+
                '.contacts,'+
                '.contacts a,'+
                '.contacts a:hover,'+
                '.blog-content .title,'+
                '.blog-content .descr,'+
                '.blog-content .categories,'+
                '.blog-content .categories a,'+
                '.blog-content .categories a:hover,'+
                '.blog-content .info-item,'+
                '.blog-content .info-item a,'+
                '.blog-list .navigation .nav-links span a,'+
                '.widget ul li,'+
                '.widget a,'+
                '.widget .widget-title,'+
                '.widget input[type="search"],'+
                '.widget.widget_search .search-wrap::before,'+
                '.widget.widget_categories ul li::before,'+
                '.widget.widget_tag_cloud .tagcloud a,'+
                '.widget #wp-calendar caption,'+
                '.widget #wp-calendar th,'+
                '.widget #wp-calendar td,'+
                '.widfet .widget_text a:hover,'+
                '.single-page .post-content,'+
                '.single-page .content p,'+
                '.single-page .content a,'+
                '.single-page .content p ol li,'+
                '.single-page .content p ul li,'+
                '.single-page .tags a,'+
                '.single-page .content blockquote::before,'+
                '.single-page .content blockquote p,'+
                '.single-page .content blockquote,'+
                '.single-page .single-category ul li a,'+
                '.single-page .pagination-single .nav-previous a,'+
                '.single-page .pagination-single .nav-next a,'+
                '.comments .main-title,'+
                '.comments .comment-form input:not([type="submit"]),'+
                '.comments .comment-form textarea,'+
                '.comments .sub-wrap::before,'+
                '.comments .com-title,'+
                '.comments .comment-entry .name,'+
                '.comments .comment-entry .name a,'+
                '.comments .comment-entry .date,'+
                '.comments .comment-entry .text p,'+
                '.comments .comment-entry .text p a,'+
                '.comments .comment-entry .comment-reply-link,'+
                '.news.type-1 .news-type,'+
                '.news.type-1 .news-type:hover,'+
                '.news.type-1 .news-likes,'+
                '.news.type-1 .news-likes:hover,'+
                '.news.type-1 .news-likes a,'+
                '.news h4 a,'+
                '.news .news-date,'+
                '.events-wrapper > .tabs > .tabs-header > ul li a,'+
                '.tabs2,'+
                '.tabs,'+
                '.events-wrapper .tabs-content2 .colum .date,'+
                '.events-wrapper .tabs-content2 .colum .wrap-title .title,'+
                '.events-wrapper .tabs-content2 .colum .text,'+
                '.events-wrapper .tabs-content2 .colum .time,'+
                '.events-wrapper .tabs-content2 .colum .price span:first-child,'+
                '.events-wrapper .tabs-content2 .colum .price span:last-child,'+
                '.tabs2 a,'+
                '.a-btn i,'+
                'button i,'+
                'button[disabled] i,'+
                'button[disabled]:focus:hover i,'+
                'input[type="button"] i,'+
                'input[type="button"][disabled] i,'+
                'input[type="button"][disabled]:focus i,'+
                'input[type="reset"]:hover i,'+
                'input[type="reset"][disabled] i,'+
                'input[type="reset"][disabled]:focus i,'+
                'input[type="submit"]:hover i,'+
                'input[type="submit"][disabled] i,'+
                'input[type="submit"][disabled]:focus i,'+
                '.tabs a,'+
                '.banner-slider-wrap .right-block .event_btn:hover,'+
                '.banner-slider-wrap .left-block .date,'+
                '.banner-slider-wrap .left-block .title,'+
                '.banner-slider-wrap .right-block .description,'+
                '.banner-slider-wrap .right-block .hashtags a,'+
                '.service-block:hover .block-icon .miami-icon,'+
                'body div.wpcf7-validation-errors,'+
                'body div.wpcf7-mail-sent-ok,'+
                '.banner-slider-wrap .right-block .event_btn:before,'+
                'body .fox_widget_content .tab_title a,'+
                'body .blog-list .navigation .nav-links span, '+
                'body .blog-list .navigation .nav-links a,'+
                'body .widget.widget_categories ul li,'+
                'body .fox-postmeta>div { color: '+ to +';}'+
                '.team-social a::after,'+
                '.team-social a:hover::after,'+
                '.banner-slider-wrap .swiper-arrow-left:after, .banner-slider-wrap .swiper-arrow-right:after {    border-color: ' + to + ';}'+
                '.banner-slider-wrap .swiper-arrow:before {    background-color:' + to + ';}';                   
                    

				if ($('.front_color_settings').length) {
					$('.front_color_settings').html(style);
				} else {
					$( 'head' ).append('<style class="front_color_settings">' + style + '</style>');
				}
			}

		} );
	} );
	

    wp.customize( 'header_text_color', function( value ) {

        value.bind( function( to ) {
            if ( to ) { 
				var style = '.header .logo .logo-text { color:' + to + ';}';
				
				if ($('.header_text_color').length) {
					$('.header_text_color').html(style);
				} else {
					$( 'head' ).append('<style class="header_text_color">' + style + '</style>');
				}
            }

        });

    });


	// Base Background Color
	wp.customize( 'base_bg_color_settings', function( value ) {

		value.bind( function( to ) {
			if ( to ) { 
				var style2 = ''+
                '.custom-popup input[type="submit"],'+
                '.c-form-group input,'+
                '.team-item .descr::before,'+
                '.gal-desc::before,'+
                '#imagelightbox-close,'+
                '.blog-content .info::before,'+
                '.events-wrapper .tabs-content2 .colum{ background-color:  '+ to +'  ;}'+
                '@media (max-width: 767px) { '+
                '.header { background-color: '+ to +';}}'+
                '.custom-popup input[type="submit"]:hover,'+
                '.custom-popup .submit-wrap:hover i{ color: '+ to +';}'+
				'.custom-popup .submit-wrap input {border-color: '+ to +';}';
              
				if ($('.base_bg_color_settings').length) {
					$('.base_bg_color_settings').html(style2);
				} else {
					$( 'head' ).append('<style class="base_bg_color_settings">' + style2 + '</style>');
				}

			}
		} );

	} );
	


	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	

	// Header Image
	wp.customize( 'header_image', function( value ) {
		value.bind( function( to ) {
			if ( to ) { 
				$( '#masthead' ).css( {
					'background-image': ' url(' + to + ')',
				} );
			}
		} );
	} );

	// Background Image
	wp.customize( 'background_image', function( value ) {

		value.bind( function( to ) {
 
			if ( to ) { 
				$( '.rm' ).css( {
					'border-color': 'transparent',
					'background-color': 'transparent',
				} );
			} else {
				$( '.rm' ).css( {
					'border-color': 'inherit',
					'background-color': 'inherit',
				} );
			}
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( to ) {
              
              $('.header .centered-menu-wrap .main-nav > ul > li > a, .header .centered-menu-wrap .main-nav ul li ul.dopwown-menu li a, .header .centered-menu-wrap .main-nav ul li ul.sub-menu li a')
                .css( {'color': to} );

              $('.header .cmn-toggle-switch.active:before, .header .cmn-toggle-switch.active:after, .header .cmn-toggle-switch span:before, .header .cmn-toggle-switch span:after, .header .cmn-toggle-switch span').css( {'background': to} );

            }
  
		} );
	} );
		
	}

} )( jQuery );
