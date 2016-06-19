/*Alex Wiley Mobile Menu */

/*$("html").click(autoClose);*/

function mobile(){
  if( $('.mobile-nav-container').hasClass("mobile-close")){
    $('.mobile-nav-container').removeClass("mobile-close");
    $('.mobile-nav-container').addClass("mobile-open");
    $('.mobile-nav').addClass("mobile-nav-hover");
  }
  else if($('.mobile-nav-container').hasClass("mobile-open")){
    $('.mobile-nav-container').removeClass("mobile-open");
    $('.mobile-nav-container').addClass("mobile-close");
    $('.mobile-nav').removeClass("mobile-nav-hover");
  }
};/*
function autoClose(){
  if( $('.mobile-nav-container').hasClass("mobile-open") ){
    mobile();
  }
}*/
