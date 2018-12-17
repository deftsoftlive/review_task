jQuery(document).ready(function() {
	function init_booking_widget() {
		$('#booking-widget .panel').css('left', ($(window).width() / 2) - ($('#booking-widget .panel').outerWidth() / 2));
		$('#booking-widget .panel').css('top', ($(window).height() / 2) - ($('#booking-widget .panel').outerHeight() / 2));
	}

	preload_images([
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/facebook2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/twitter2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/insta2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/a1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/a2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/ap1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/ap2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/b1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/b2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/c1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/c2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/h1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/h2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/o1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/o2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/r1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/r2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/s1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/s2.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/u1.png',
	    'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/u2.png',
	]);

	function preload_images(images) {
		$(images).each(function(){
		    (new Image()).src = this;
		});
	}

	$('.preload-image').each(function(index, element) {
		$(this).attr('src', $(this).data('image')).css('cursor','pointer').hover(function() {
			$(this).attr('src', $(this).data('hover-image'))
		}, function() {
			$(this).attr('src', $(this).data('image'));
		});
	});


	init_letters($('#letters img'));
	setInterval(function() { init_letters($('#letters img')); }, 400);
	function init_letters(letters) {
		$.each(letters, function(index, element) {
			var seed = Math.floor(Math.random() * 2) + 1;
			$(this).attr('src', 'http://bchurrasco.com.au/wp-content/themes/bchurrasco/img/letters/' + $(this).data('letter') + seed + '.png');
		});
	}


	init_element_height($('#main'), $('#header'), $('#footer'));
	function init_element_height(element, top_element, bottom_element) {
		//element.css('min-height', $(window).height() - top_element.outerHeight() - bottom_element.outerHeight() - 70);
		//$('#letters-wrapper').css('top', ($('#main').outerHeight() / 2) - ($('#letters-wrapper').outerHeight() / 2));
	}

	$(window).resize(function() {
		init_element_height($('#main'), $('#header'), $('#footer'));
		init_booking_widget();
	});

	/* $('#btn-book-now').click(function(e) {
		e.preventDefault();

		$('#booking-widget').show();
		init_booking_widget();
	}); */

	$('#booking-widget .close').click(function(e) {
		e.preventDefault();

		$('#booking-widget').hide();
	});
});
