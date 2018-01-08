$(document).ready(function() {
    var emailLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Envoyer un email' : 'Email Me';
    var callLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Appelle-moi' : 'Call Me'
    var securityLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Entrer le code de sécurité:' : 'Enter security code:'
    
    $('.contact-us-form-content label').first().text(emailLabel).addClass('active-label');
    $('.contact-us-form-content label').first().next().text(callLabel);
    $('.captcha-field-1 label').text(securityLabel);
    
    $('.phone-field').hide();

    $('.contact-us-form-content label').on('click', function() {
        if (!$(this).hasClass('active-label')) {
            $('.active-tabber').removeClass('active-tabber');
            $('.active-label').removeClass('active-label');
            $('#' + $(this).attr('for')).addClass('active-tabber');
            $(this).addClass('active-label');
        }
    });

    $('.email-field-label').click(function() {
        $('.phone-field').hide();
        $('.email-field').show();
    });

    $('.phone-field-label').click(function() {
        $('.email-field').hide();
        $('.phone-field').show();
    });


    $(document).on('click', '.contact-us-form-header', function() {
        $('.contact-us-form-content').toggleClass('active');
    });

    $(document).on('click', '.contact-us-form-content input[type="submit"]', function() {
        $(this).click(function() { return false; });
        $(this).addClass('disabled');
        return true;
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

    });

});