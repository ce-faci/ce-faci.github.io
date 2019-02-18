$(window).on( "load", function() {
	setTimeout(function() {
		$('body').removeClass('load');
	    $('body').addClass('load2');
	}, 250);
});