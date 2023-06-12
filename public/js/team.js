$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  
    $('.prev-button').click(function() {
      $('.owl-carousel').trigger('prev.owl.carousel');
    });
  
    $('.next-button').click(function() {
      $('.owl-carousel').trigger('next.owl.carousel');
    });
  });
  