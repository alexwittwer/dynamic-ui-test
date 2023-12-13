let currentSlide = [0];

const sliderItems = document.querySelectorAll(".slide-item");
const nextSlideBtn = document.querySelector(".next-slide");
const prevSlideBtn = document.querySelector(".prev-slide");

let maxSlide = sliderItems.length;

console.log(maxSlide);

function nextSlide(currentSlide) {
  if (currentSlide[0] === maxSlide - 1) {
    currentSlide[0] = 0;
    sliderItems[maxSlide - 1].classList.toggle("active");
    sliderItems[currentSlide[0]].classList.toggle("active");
  }
  currentSlide[0] += 1;
  sliderItems[currentSlide[0]].classList.toggle("active");
  sliderItems[currentSlide[0] - 1].classList.toggle("active");
}

function prevSlide(currentSlide) {
  if (currentSlide[0] === 0) {
    currentSlide[0] = maxSlide - 1;
    sliderItems[0].classList.toggle("active");
    sliderItems[currentSlide].classList.toggle("active");
  }
  currentSlide[0] -= 1;
  sliderItems[currentSlide[0]].classList.toggle("active");
  sliderItems[currentSlide[0] + 1].classList.toggle("active");
}

function renderDots(sliderItems) {
  sliderItems.forEach(() => {});
}

nextSlideBtn.addEventListener("click", (e) => {
    e.preventDefault
  nextSlide(currentSlide);
});

prevSlideBtn.addEventListener("click", () => {
  prevSlide(currentSlide);
});
