function viewPort(){
  var $animation_elements = $('.animated');
  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view(){
    //Configure variables to get the window height + window bottom position.
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowHeight + windowTopPosition);

    //Configure variables to get elements height + height from top of page.
    $.each($animation_elements, function(){
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      //Check to see if current container is within viewport.
      if ((elementTopPosition <= windowBottomPosition) &&
      (elementBottomPosition >= windowTopPosition)){
        $element.addClass('fadeInUp');
      }
      // else{
      //   $element.removeClass('fadeInUp');
      // };
    });
  };
};
