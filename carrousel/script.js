let count = 0;

const prevClick = document.querySelector(".prev");
const nextClick = document.querySelector(".next");
const image = document.querySelector(".image_wrapper");

function changeImage(idx) {
  image.style.transform = `translateX(-${500 * idx}px)`;
}

prevClick.addEventListener("click", () => {
  count === 0 ? (count = 2) : count--;
  changeImage(count);
});

nextClick.addEventListener("click", () => {
  count === 2 ? (count = 0) : count++;
  changeImage(count);
});

setInterval(() => {
  count === 2 ? (count = 0) : count++;
  changeImage(count);
}, 2000);
