const container = document.getElementById("container");
const pagination = document.getElementById("pagination");
const btn_next = document.getElementById("btn_next");
const btn_prev = document.getElementById("btn_prev");

let rooms = [];
for (let i = 0; i <= 30; i++) {
  const roomContent = container.innerHTML;
  rooms.push(roomContent);
}

let current_page = 1;
let obj_per_page = 6;

function totNumPages() {
  return Math.ceil(rooms.length / obj_per_page);
}

function prevPage() {
  if (current_page > 1) {
    current_page--;
    change(current_page);
  }
}

function nextPage() {
  if (current_page < totNumPages()) {
    current_page++;
    change(current_page);
  }
}

let spanArr = [];
for (p = 1; p <= totNumPages(); p++) {
  span = document.createElement("span");
  spanArr.push(span);
  span.innerHTML = p;
  pagination.insertBefore(span, btn_next);
}

function change(page) {
  btn_prev.addEventListener("click", prevPage);
  btn_next.addEventListener("click", nextPage);
  let title;
  if (page < 1) page = 1;
  if (page > totNumPages()) page = totNumPages();
  container.innerHTML = "";
  for (var i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
    if (i < rooms.length) container.innerHTML += rooms[i];
    const wrapers = container.getElementsByClassName("rooms-grid__wraper");
    for (item of wrapers) {
      const texts = item.getElementsByTagName("h1");
      const images = item.getElementsByClassName("rooms-grid__image");
      for (image of images) {
        let random = Math.floor(Math.random() * (5 - 1) + 1);
        image.setAttribute("src", `./img/slide${random}.jpg`);
        if (image.getAttribute("src") === "./img/slide1.jpg") {
          title = "Minimal Duplex Room";
        } else if (image.getAttribute("src") === "./img/slide2.jpg") {
          title = "Double Bed Room";
        } else if (image.getAttribute("src") === "./img/slide3.jpg") {
          title = "Luxury Suite";
        } else if (image.getAttribute("src") === "./img/slide4.jpg") {
          title = "Single Bed Room";
        }
      }
      for (text of texts) {
        text.innerHTML = title;
      }
    }

    spanArr.map((span) => {
      if (parseInt(span.innerHTML) === page) {
        span.style.backgroundColor = "#BEAD8E";
        span.style.color = "white";
      } else {
        span.style.backgroundColor = "white";
        span.style.color = "black";
      }
    });
  }
}
window.onload = function () {
  change(1);
};
