(function ( $ ) {

	$(document).ready(function(){
		initHamburger();
		initSitePanel();
		initSlideShow();
		initTwitterFeed();
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

    function initTwitterFeed()
    {
    	var feedJson = $.parseJSON($('#twitterFeed').text());
    	var counter = 0;
    	console.log(feedJson[counter]);
    	$('.article-tweet').each(function(){
    		$this = $(this);
    		var tweet = feedJson[counter].text.replace(/(http:[^\s]+)/, '<a href="$1">$1</a>')
								.replace(/@([^\s:]+)/, '<a href="http://twitter.com/$1">@$1</a>');
    		var screenName = feedJson[counter].user.screen_name;
    		var idString = feedJson[counter].id_str;
    		var twitterDetails = $this.find('.twitter-details').attr("href", "http://twitter.com/" + screenName);

    		$this.find('p').html(tweet);
    		twitterDetails.find('img').attr({"src": feedJson[counter].user.profile_image_url, "alt": screenName});
    		twitterDetails.find('h2').text(feedJson[counter].user.name);
    		twitterDetails.find('h3').text("@" + screenName);
    		$this.find('time').html($('<a>').attr("src", "http://twitter.com/" + screenName + "/status/" + idString).text(feedJson[counter].created_at));
    		$this.find('.tweet-intents .reply').attr("href", "https://twitter.com/intent/tweet?in_reply_to=" + idString);
    		$this.find('.tweet-intents .retweet').attr("href", "https://twitter.com/intent/retweet?tweet_id=" + idString);
    		$this.find('.tweet-intents .favorite').attr("href", "https://twitter.com/intent/favorite?tweet_id=" + idString);
    		counter++;
    	});
    };

})(jQuery);