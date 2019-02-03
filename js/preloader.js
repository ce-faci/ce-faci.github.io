$(window).on( "load", function() {
        if ($('#page-preloader').addClass('done')) {
        	$('#page-preloader').removeClass('done');
        	setTimeout(function() {
        		$('#page-preloader').addClass('done');
        	}, 2000);
        	setTimeout(function() {
        		$('.preloader').addClass('done');
        	}, 3000);
        }
    });