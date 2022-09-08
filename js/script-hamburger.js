//HAMBURGER MENU
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu-div");
const textMenu = document.getElementById("menu").innerHTML;
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-div-active");
  if (menu.classList.contains("menu-div-active")) {
    menuIcon.setAttribute("src", "./img/iconos_svg/x.svg");
    menu.innerHTML = textMenu;
  } else {
    menuIcon.setAttribute("src", "../img/iconos_svg/menu.svg");
    menu.innerHTML = "";
  }
});
