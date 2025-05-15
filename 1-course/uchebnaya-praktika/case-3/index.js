const images = [
  "https://picsum.photos/id/1015/400/250",
  "https://picsum.photos/id/1016/400/250",
  "https://picsum.photos/id/1018/400/250",
  "https://picsum.photos/id/1020/400/250",
  "https://picsum.photos/id/1024/400/250",
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
