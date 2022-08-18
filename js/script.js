//HAMBURGER MENU
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu-burger");
const textMenu = document.getElementById("menu").innerHTML;

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("header__menu-burger-active");
  if (menu.classList.contains("header__menu-burger-active")) {
    menuIcon.setAttribute("src", "../img/iconos_svg/x.svg");
    menu.innerHTML = textMenu;
  } else {
    menuIcon.setAttribute("src", "../img/iconos_svg/menu.svg");
    menu.innerHTML = "";
  }
});

//SLIDER
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
