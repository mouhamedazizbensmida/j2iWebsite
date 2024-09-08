$(document).ready(function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0; // Element is in the viewport
  }

  // Function to animate elements on scroll
  function animateOnScroll() {
    $(".section").each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass("visible"); // Add 'visible' class if in viewport
      }
    });
  }

  // Initial check for visibility
  animateOnScroll();

  // Check on scroll
  $(window).on("scroll", function () {
    animateOnScroll();
  });
});
