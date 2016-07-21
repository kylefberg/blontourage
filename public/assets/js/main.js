   $(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.slider').slider('next');
      $('.slider').slider('prev');
      $('.slider').slider('pause');
      $('.carousel').carousel();
      $('.carousel').carousel('next');
      $('.carousel').carousel('next', [3]);
      $('.carousel').carousel('prev');
      $('.carousel').carousel('prev', [4]);
      $('.parallax').parallax();
    });




