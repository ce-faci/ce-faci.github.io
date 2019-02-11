$(window).on( "load", function() {
        if ($('#page-preloader').addClass('done')) {
        	setTimeout(function() {
        		$('#page-preloader').removeClass('done');
        	}, 500);
        	setTimeout(function() {
        		$('#page-preloader').addClass('done');
        	}, 2000);
        	setTimeout(function() {
        		$('.preloader').addClass('done');
        	}, 3000);
        }
    });