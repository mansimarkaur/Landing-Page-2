function navFix(){
	var topNav = $('.navbar.site-nav');
	var cachedWindow = $(window);
	cachedWindow.scroll(function() {
	    if (cachedWindow.scrollTop() <= 0) {
		    if (topNav.hasClass('navbar-inverse')) {
			    topNav.addClass('navbar-transparent').removeClass('navbar-inverse');
	    	}
	    }
	    else {
		    if (topNav.hasClass('navbar-transparent')) {
	    		topNav.addClass('navbar-inverse').removeClass('navbar-transparent');
	    	}
    	}
    });
	$('#header-logo').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: 0}, 700);
	});
}
navFix();