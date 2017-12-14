$(document).ready(function(){
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
    var sticky;
    function createSticky(){
      if($(window).height() > ($('.sticky-form').height())){
        sticky = new Waypoint.Sticky({
          element: $('.sticky-form')[0]
        });
      }
      resizeSticky();
    }
    function initStickies(){
        createSticky();
    }
    function resizeSticky(){
      if (Modernizr.mq('(min-width: 992px)')) {
        $('.sticky-form').width(($('.container').outerWidth() * 0.33333333333 - 30));
      }
      else if(Modernizr.mq('(min-width: 768px)') && Modernizr.mq('(max-width: 992px)')) {
        $('.sticky-form').width(($('.zoneMainContent').width() * 0.4166666667 - 30));
      }
      else{
        $('.sticky-form').width($('.zoneMainContent').width());
      }
    }
    $(window).resize(function(){
      resizeSticky();
    });
    initStickies();
  });