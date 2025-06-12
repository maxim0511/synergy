const images = [
  "images/picture_1.jpg",
  "images/picture_2.jpg",
  "images/picture_3.jpg",
  "images/picture_4.jpg",
  "images/picture_5.jpg",
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const sliderCounter = document.getElementById("sliderCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
  sliderImage.src = images[currentIndex];
  sliderCounter.textContent = `Изображение ${currentIndex + 1} из ${
    images.length
  }`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

// Инициализация
updateSlider();
