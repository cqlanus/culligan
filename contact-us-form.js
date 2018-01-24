$(document).ready(function() {
    setFormLabels();
    setFormPlaceholders();
    setRequiredFields();
    
    $('.phone-field').hide();
    $('.email-field').addClass('active-tabber');

    $('.contact-us-form-content label').on('click', function() {
        if (!$(this).hasClass('active-label')) {
            $('.active-tabber').removeClass('active-tabber').prop('required', false);
            $('.active-label').removeClass('active-label');
            $('#' + $(this).attr('for')).addClass('active-tabber').prop('required', true);
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
        if (requiredFieldsFilled()) {
            $(this).click(function() { return false; })
            $(this).addClass('disabled');
            return true;
        } 
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


function requiredFieldsFilled() {
    var hasName = !!$('.name-field').val();
    var hasZip = !!$('.zip-field').val();
    var hasContact = (!!$('.active-tabber.email-field').val() || !!$('.active-tabber.phone-field').val())
    return hasName && hasZip && hasContact
}


function setFormLabels() {
    var emailLabel = window.location.pathname.substring(1, 3) === 'fr' ? 'Envoyer un courriel' : 'Email Me';
    var callLabel = window.location.pathname.substring(1, 3) === 'fr' ? 'Appelle-moi' : 'Call Me'
    var securityLabel = window.location.pathname.substring(1, 3) === 'fr' ? 'Entrer le code de sécurité:' : 'Enter security code:'

    $('.contact-us-form-content label').first().text(emailLabel).addClass('active-label');
    $('.contact-us-form-content label').first().next().text(callLabel);
    $('.captcha-field-1 label').text(securityLabel);
}

function setFormPlaceholders() {
    var namePlaceholder = window.location.pathname.substring(1, 3) === 'fr' ? 'Prénom' : 'Full Name';
    var zipPlaceholder = window.location.pathname.substring(1, 3) === 'fr' ? 'Code Postal' : 'Zip Code';
    var emailPlaceholder = window.location.pathname.substring(1, 3) === 'fr' ? 'Adresse De Courriel' : 'Email Address';
    var phonePlaceholder = window.location.pathname.substring(1, 3) === 'fr' ? 'No. De Téléphone' : 'Phone';

    $('.name-field').attr('placeholder', namePlaceholder);
    $('.zip-field').attr('placeholder', zipPlaceholder);
    $('.email-field').attr('placeholder', emailPlaceholder);
    $('.phone-field').attr('placeholder', phonePlaceholder);
}

function setRequiredFields() {
    $('.name-field').prop('required', true);
    $('.zip-field').prop('required', true);
    $('.email-field').prop('required', true);
}