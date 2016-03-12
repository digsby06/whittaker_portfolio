(function ( $ ) {

  $(document).ready(function(){
    initHamburger();
    initSitePanel();
    initSlideShow();
  });

  function initHamburger()
  {
    $('.hamburger').on("click", function(){
      $(this).toggleClass("close");
      $('.site-panel').toggleClass("show");
    });
  };

  function initSitePanel()
  {
    $('.navigation a').on("click", function(e){
      e.preventDefault();
            if($(this).parents('.site-panel').length)
            {
                $('.hamburger').trigger("click");
            }
      if(!$(this).hasClass('.current-filter'))
      {
        $('.current-filter').removeClass('current-filter');
        $(this).addClass('current-filter');
        var showGridItemsType = $(this).data("grid-items");
        $('.article-grid li').not('.article-logo').fadeOut(300);
        setTimeout(function(){
          var itemsToFadeIn = $('.article-grid li.' + showGridItemsType);
          sequentialFadeIn(itemsToFadeIn, 0);
        }, 500);
      }
    });

    function sequentialFadeIn(itemsToFadeIn, currentIndex)
    {
      if(currentIndex < itemsToFadeIn.length)
      {
        setTimeout(function(){
          $(itemsToFadeIn[currentIndex]).fadeIn(450);
          sequentialFadeIn(itemsToFadeIn, currentIndex+1);
        }, 50);
      }
    };
  };

  $.fn.simpleSlideshow = function()
  {
    that = this;
        this.icons = this.find('.article-large-icons span').hide();
        this.titles = this.find('.article-fixed-content span').hide();
        this.index = 0;
        this.delay = 1700;
        this.timeout;

        this.initialise = function()
        {
          $(this).on("mouseenter", function()
          {
            that.play();
          });
          $(this).on("mouseleave", function()
          {
            that.pause();
          });
          
        }

        this.play = function()
        {         
          if(that.index >= that.icons.length)
          {
            that.index = 0;
          }
          that.goToNextSlide();
          that.index++;
        }

        this.pause = function()
        {
          clearTimeout(that.timeout);
          $(that.icons).hide();
          $(that.titles).hide();
        }
        
        this.goToNextSlide = function()
        {
          $(that.icons[that.index]).fadeIn(400).siblings().hide();
          $(that.titles[that.index]).fadeIn(400).siblings().hide();
          clearTimeout(that.timeout);
          that.timeout = setTimeout(function() { that.play(); }, that.delay);
      }

        return this.initialise();
    };

    function initSlideShow()
  {
    $('.simple-slideshow').simpleSlideshow();
  };

    
})(jQuery);