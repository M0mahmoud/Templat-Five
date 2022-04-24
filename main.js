//Start ==>to number
let stat = document.querySelectorAll(".clients .box .number");
let section = document.querySelector(".clients");
let start = false;

//Start ==> To TOP
let toTop = document.querySelector(".totop");
window.onscroll = () => {
  if (window.scrollY > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
  if (window.scrollY >= section.offsetTop - 450) {
    if (!start) {
      stat.forEach((number) => count(number));
    }
    start = true;
  }
};
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function count(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  },[ 2000 / goal]);
}
//End ==>To Max Number
