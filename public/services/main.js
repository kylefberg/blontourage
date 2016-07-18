$(function() {
// navigation for the elevator function with links
  var homeNav = document.getElementById("nav-home");
  var showsNav = document.getElementById("nav-shows");
  var musicNav = document.getElementById("nav-music");
  var contactNav = document.getElementById("nav-contact");

  new Elevator({
    element: homeNav,
    targetElement: document.querySelector('#home'),
  });

  new Elevator({
    element: showsNav,
    targetElement: document.querySelector('#projects'),
  });

  new Elevator({
    element: musicNav,
    targetElement: document.querySelector('#about'),
  });

  new Elevator({
    element: contactNav,
    targetElement: document.querySelector('#contact'),
  });
});
