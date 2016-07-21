 $(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.carousel').carousel();
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', [3]);
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', [4]);
    $('.parallax').parallax();
  });

   $(function() {
// navigation for the elevator function with links
  var homeNav = document.getElementById("nav-home");
  var showsNav = document.getElementById("nav-shows");
  var musicNav = document.getElementById("nav-music");
  var connectNav = document.getElementById("nav-connect");


  new Elevator({
    element: homeNav,
    targetElement: document.querySelector('#home'),
  });

  new Elevator({
    element: showsNav,
    targetElement: document.querySelector('#shows'),
  });

  new Elevator({
    element: musicNav,
    targetElement: document.querySelector('#music'),
  });

  new Elevator({
    element: connectNav,
    targetElement: document.querySelector('#connect'),
  });
});




