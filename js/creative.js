(function($) {
  "use strict"; // Start of use strict


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  let wdth=$(window).width();
  let shoplist = function(e){
    if(e > 768){
      $('.shop-list').addClass('show')
    }else{
      $('.shop-list').removeClass('show')
    }
  }
  shoplist(wdth);
  $(window).resize(function() {
    wdth=$(window).width();
    shoplist(wdth);
  });
  

  $('.shop .con .con-pic .like').click(function(){
    $(this).toggleClass('click');
  })


})(jQuery); // End of use strict
