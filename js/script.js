const burger = document.querySelector(".burger");
const navbar = document.querySelector(".header-nav");
const line1 = document.querySelector(".l1");
const line2 = document.querySelector(".l2");
const line3 = document.querySelector(".l3");
burger.addEventListener("click", () => {
  navbar.classList.toggle("enable");
  if (navbar.classList.contains("enable")) {
    line1.style.transform = "rotate(45deg) translate(8px,7px)";
    line2.style.opacity = "0";
    line3.style.transform = "rotate(-45deg) translate(9px,-8px)";
    
  } else {
    line2.style.opacity = "1";
    line1.style.transform = "rotate(0)";
    line3.style.transform = "rotate(0)";
  }
});
