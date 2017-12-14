$(document).ready(function() {
	$(document).on('click', '.contact-us-form-header', function() {
		$('.contact-us-form-content').toggleClass('active');
	})

	// var sticky = new Waypoint.Sticky({
	//     element: $('.contact-us-form')[0]
	// });

	var inview = new Waypoint.Inview({
	    element: $('.contact-us-form')[0],
	    exit: function(direction) {
	    	direction === 'down' && $('.contact-us-form').addClass('stuck');
	    },
	    entered: function (direction) {
	    	direction === 'up' && $('.contact-us-form').removeClass('stuck');
	    }

	})

});