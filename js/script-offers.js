const container = document.getElementById("container");

let offers = [];
for (let i = 0; i <= 2; i++) {
  const offersContent = container.innerHTML;
  offers.push(offersContent);
}

for (let i = 0; i < offers.length; i++) {
  container.innerHTML += offers[i];
}

const images = container.getElementsByClassName("offers__image");
const titles = container.getElementsByClassName("offers__headline");
for (image of images) {
  images[1].setAttribute("src", "./img/slide2.jpg");
  images[2].setAttribute("src", "./img/slide3.jpg");
  images[3].setAttribute("src", "./img/slide4.jpg");
}
for (title of titles) {
  titles[1].innerHTML = "Double Bed Room";
  titles[2].innerHTML = "Luxury Suite";
  titles[3].innerHTML = "Single Bed Room";
}
