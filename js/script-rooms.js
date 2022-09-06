const room = document.getElementById("room");
const container = document.getElementById("container");
const pagination = document.getElementById("pagination");
const btn_next = document.getElementById("btn_next");
const btn_prev = document.getElementById("btn_prev");
const image = document.getElementById("image");

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
  if (page < 1) page = 1;
  if (page > totNumPages()) page = totNumPages();
  container.innerHTML = "";
  for (var i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
    if (i < rooms.length) container.innerHTML += rooms[i];
  }
  spanArr.map((span) => {
    if (parseInt(span.innerHTML) === page) {
      span.classList.add("span-active");
      span.style.color = "white";
    } else {
      span.classList.remove("span-active");
      span.style.color = "black";
    }
  });
}
window.onload = function () {
  change(1);
};
