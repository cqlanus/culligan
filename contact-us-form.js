$(document).ready(function() {
    $('.contact-us-form-content label').first().text('Email Me');
    $('.contact-us-form-content label').last().text('Call Me');

    $(document).on('click', '.contact-us-form-content label', function() {
        var isActive = $(this).hasClass('active-label');

        if (!isActive) {
            // $('.contact-field').hide();
            $('.active-label').removeClass('active-label');
            $(this).addClass('active-label');
            $('.active-tabber').removeClass('active-tabber');
            $('#' + $(this).attr('for')).addClass('active-tabber');

        }
    });


    $(document).on('click', '.contact-us-form-header', function() {
        $('.contact-us-form-content').toggleClass('active');
    });

    // var sticky = new Waypoint.Sticky({
    //     element: $('.contact-us-form')[0]
    // });

    var inview = new Waypoint.Inview({
        element: $('.contact-us-form')[0],
        exit: function(direction) {
            direction === 'down' && $('.contact-us-form').addClass('stuck');
        },
        entered: function(direction) {
            direction === 'up' && $('.contact-us-form').removeClass('stuck');
        }

    })

});