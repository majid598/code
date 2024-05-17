const navbar = document.getElementById("navbar");
const head = document.getElementById("head");
const btn = document.getElementById("btn");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-[#0F101E]");
      head.classList.add("bg-[#0F101E]");
    } else {
      navbar.classList.remove("bg-[#0F101E]");
      head.classList.remove("bg-[#0F101E]");
    }
  });
});

btn.addEventListener("click", () => {
  const element = document.getElementById("build");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

openBtn.addEventListener("click", () => {
  navbar.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});
