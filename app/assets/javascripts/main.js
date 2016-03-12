(function ($) {
	"use strict";

    jQuery(document).ready(function($){

	//Initiat WOW JS
	new WOW().init();

	$(".embed-responsive iframe").addClass("embed-responsive-item");
	$(".carousel-inner .item:first-child").addClass("active");

	$('[data-toggle="tooltip"]').tooltip();

	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}

	$(".mainmenu-area").sticky({topSpacing:0});

    // jQuery smooth scroll
    $('li.smooth-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '65';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });


	$('.counter-text').counterUp({
	    delay: 10,
	    time: 2000
	});


	$('.testimonials-wrap').owlCarousel({
		items:1,
		loop:true,
		animateIn:true,
		autoplaySpeed: 1,
		autoplay:true,
	});

	$('a.lightbox').nivoLightbox();

    // jQuery scroll psy
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    });


    $('body').addClass('mobilemenu-activate');
        
    $('.nav.navbar-nav').click(function(){
    	$('.navbar-collapse').removeClass('in');
    });

    var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        scrollwheel:false,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
      
    });


    });



}(jQuery));	