$(document).ready(function () {
    let currentSlide = 0;
    const slides = $(".slide");
    const dots = $(".dot");
    const totalSlides = slides.length;
  
    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
      dots.removeClass("active").eq(index).addClass("active");
    }
  
    $(".arrow.right").click(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });
  
    $(".arrow.left").click(function () {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });
  
    $(".dot").click(function () {
      currentSlide = $(this).index();
      showSlide(currentSlide);
    });
  });
  
  