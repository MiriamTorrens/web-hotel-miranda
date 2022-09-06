const room = document.getElementById("room");
const container = document.getElementById("container");
const pagination = document.getElementById("pagination");

for (let i = 0; i <= 30; i++) {
  const clon = room.cloneNode(true);
  container.appendChild(clon);
}
