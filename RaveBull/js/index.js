const workBtn = document.getElementById("workbtn");
var navbar = document.getElementById("navbar");
var head = document.querySelector(".head");
const topBtn = document.getElementById("topbtn");
const missionBtn = document.getElementById("missionbtn");

const func = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    navbar.classList.remove("active");
  }
};
document.getElementById("open").addEventListener("click", () => {
  navbar.classList.add("active");
  console.log("hello");
});
document.getElementById("close").addEventListener("click", () => {
  navbar.classList.remove("active");
  console.log("hello");
});

workBtn.addEventListener("click", () => func("itworks"));
topBtn.addEventListener("click", () => func("top"));
missionBtn.addEventListener("click", () => func("themission"));

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-blur");
      head.classList.add("navbar-blur");
    } else {
      navbar.classList.remove("navbar-blur");
      head.classList.remove("navbar-blur");
    }
  });
});
