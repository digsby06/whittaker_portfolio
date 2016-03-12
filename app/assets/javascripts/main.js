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


      
    });


    });



}(jQuery));	