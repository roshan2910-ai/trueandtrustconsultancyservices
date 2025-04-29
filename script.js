document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const sliderContainer = document.querySelector('.hero-container');

    function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}
window.moveSlide = moveSlide;


    function updateSlider() {
        const slideWidth = sliderContainer.offsetWidth / totalSlides;
sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    }

    // Auto-slide functionality
    setInterval(() => {
        moveSlide(1);
    }, 5000);

    // Update the slider initially
    updateSlider();
});
