$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
