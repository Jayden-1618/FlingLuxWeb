let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');
const totalImages = images.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}