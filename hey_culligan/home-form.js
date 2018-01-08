  $(document).ready(function(){
    var emailLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Envoyer un email' : 'Email Me';
    var callLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Appelle-moi' : 'Call Me'
    var securityLabel = window.location.pathname.substring(1,3) === 'fr' ? 'Entrer le code de sécurité:' : 'Enter security code:'
    
    $('.aside-form .form-wrapper label').first().text(emailLabel).addClass('active-label');
    $('.aside-form .form-wrapper label').first().next().text(callLabel);
    $('.captcha-field-1 label').text(securityLabel);
    
    $('.phone-field').hide()
      $('.aside-form .form-wrapper label').on('click', function(){
        if(!$(this).hasClass('active-label')){
          $('.active-tabber').removeClass('active-tabber');
          $('.active-label').removeClass('active-label');
          $('#'+ $(this).attr('for')).addClass('active-tabber');
          $(this).addClass('active-label');
        }
      });
      $('#form-toggle').on('click', function(){
        $('.sticky-form.stuck').toggleClass('active');
      });

      $('.email-field-label').click(function() {
        $('.phone-field').hide();
        $('.email-field').show();
      });

      $('.phone-field-label').click(function() {
        $('.email-field').hide();
        $('.phone-field').show();
      });

      var sticky;
      var inview;
      function createSticky(){
        // var isDesktop = $(window).width() > 768;
        var inviewElement = /*isDesktop ?*/ $('.gif-feature-text h3')[0] /*: $('.form-clear-el')[0]*/

        if($(window).height() > ($('.sticky-form').height())){
          sticky = new Waypoint.Sticky({
            element: $('.sticky-form')[0]
          });
          setTimeout(function() {
            inview = new Waypoint.Inview({
              element: inviewElement,
              enter: function(direction) {
                /*isDesktop && */direction === 'up' &&  $('.sticky-form.stuck .form-wrapper').css('display', 'inherit')
              },
              exited: function(direction) {
                console.log(inviewElement);
                  /*isDesktop && */direction === 'down' && $('.sticky-form.stuck .form-wrapper').css('display', 'none');
              },
            })
          }, 1000);
        }
        resizeSticky();
      }
      function initStickies(){
          createSticky();
      }
      function resizeSticky(){
        if (Modernizr.mq('(min-width: 1024px)')) {
          // $('.sticky-form').width(($('.container').outerWidth() * 0.25 - 30));
          $('.sticky-form').width(265);
        }
        else if(Modernizr.mq('(min-width: 768px)') && Modernizr.mq('(max-width: 1024px)')) {
          // $('.sticky-form').width(($('.zoneMainContent').width() * 0.3333333 - 30));
          $('.sticky-form').width(225);
        }
        else{
          $('.sticky-form').width($('.zoneMainContent').width());
        }
      }
      $(window).resize(function(){
        resizeSticky();
      });
      initStickies();



      $(document).on('click', '.form-wrapper input[type="submit"]', function() {
        $(this).click(function() { return false; })
        $(this).addClass('disabled');
        return true;
      })


    });
