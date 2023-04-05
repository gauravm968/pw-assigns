let container = document.getElementById("container");
let show = document.getElementById("show");
let paragraph = document.getElementById("para");

// adding a keydown event listener to the document
document.addEventListener("keydown",(e) => {
  show.style.color = "red";
  show.style.fontSize = "70px";
  show.style.fontWeight = "700";
  show.innerText = `${e.key} is keyDown `;
  paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed nesciunt, ipsa quisquam quod quidem repellendus amet perferendis officiis autem excepturi dolore, modi temporibus, in rerum iste necessitatibus adipisci repudiandae Atque veritatis repudiandae doloribus accusantium harum eaque inventore, molestiae voluptatem quas ipsum, fuga, quae ullam odio ut similique omnis odit nesciunt labore maxime illum delectus assumenda vero! Distinctio, molestiae reprehenderit!";
  paragraph.style.fontSize = "20px";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", (e) => {
  show.style.color = "blue";
  show.style.fontSize = "60px";
  show.innerText = `${e.key} is keyUp `;
  paragraph.innerText = "Press any key to show paragraph if read para then hold any key";
});