//HAMBURGER MENU
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu-div");
const textMenu = document.getElementById("menu").innerHTML;
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-div-active");
  if (menu.classList.contains("menu-div-active")) {
    menuIcon.setAttribute("src", "../img/iconos_svg/x.svg");
    menu.innerHTML = textMenu;
  } else {
    menuIcon.setAttribute("src", "../img/iconos_svg/menu.svg");
    menu.innerHTML = "";
  }
});

//SLIDER ROOMS
const swiper = new Swiper(".rooms__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//SLIDER FACILITES
const initSwiperFacilities = function () {
  const swiper2 = new Swiper(".facilities__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

//SLIDER FOODS
const initSwiperFoods = function () {
  const swiper3 = new Swiper(".foods__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

//PAGINATION FOODS
const initPaginationFoods = function () {
  const pagination = new Swiper(".foods__pagination", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

//INIT SWIPERS
const mql = window.matchMedia("(max-width: 899px)");
const mql2 = window.matchMedia("(max-width: 799px)");
if (innerWidth < 900) {
  initSwiperFacilities();
  initSwiperFoods();
}
if (innerWidth < 800) {
  initPaginationFoods();
}
mql.onchange = (e) => {
  if (e.matches) {
    initSwiperFacilities();
    initSwiperFoods();
  } else {
    location.reload();
  }
};
mql2.onchange = (e) => {
  if (e.matches) {
    initPaginationFoods();
  } else {
    location.reload();
  }
};
