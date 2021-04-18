const $taskBar = document.getElementById("task_bar_items_cont");
function createItemToTaskBar(item) {
  const $item = document.createElement("div");
  $item.classList.add("task_bar_item");

  $item.setAttribute("data-id", item.id);

  const cover = document.createElement("div");
  cover.classList.add("cover_clickable");
  cover.setAttribute("data-id", item.id);
  $item.appendChild(cover);

  const $span = document.createElement("span");
  $span.classList.add("hover_span");
  $span.textContent = item.title;

  const $animateSpan = document.createElement("span");
  $animateSpan.classList.add("click_me_animate");

  const $itemImage = document.createElement("img");
  $itemImage.classList.add("task_bar_item_image");
  $itemImage.classList.add("to_change_img");
  $itemImage.setAttribute("data-img-name", item.imgName);
  $itemImage.src = item.src;

  cover.addEventListener("mouseover", (event) => {
    const hoveredSpan = $item.querySelector("span");
    cover.classList.add("hovered_in_cover");
    hoveredSpan.style.display = "block";
    setTimeout(() => (hoveredSpan.style.opacity = "0.7"), 1);
  });

  cover.addEventListener("mouseleave", (ev) => {
    const hoveredSpan = $item.querySelector("span");
    cover.classList.remove("hovered_in_cover");
    hoveredSpan.style.opacity = "0";
    setTimeout(() => (hoveredSpan.style.display = "block"), 1);
  });
  cover.addEventListener("click", (event) => {
    const modalWind = document.querySelector(".modal");
    if (modalWind) {
      globModal.close();
      if (event.target.dataset.id !== modalWind.dataset.id) {
        globModal.open(item, cover);
      }
    } else {
      globModal.open(item, cover);
    }
  });

  $item.appendChild($itemImage);
  $item.appendChild($span);
  $item.appendChild($animateSpan);
  $taskBar.appendChild($item);
}
window.globalArray.forEach((item) => createItemToTaskBar(item));

// task_bar_rigth_content

const dateTimeContent = document.getElementById("time_date");
// for date
const dateContent = dateTimeContent.querySelector("#date");
let date = new Date();
let dateD =
  ("" + date.getDate()).length < 2 ? "0" + date.getDate() : date.getDate();
let dateM =
  ("" + date.getMonth()).length < 2
    ? "0" + (date.getMonth() + 1)
    : date.getMonth() + 1;
dateContent.innerHTML = `${dateD}.${dateM}.${date.getFullYear()}`;

// for time
const time = dateTimeContent.querySelector("#time");
let dateHour =
  ("" + date.getHours()).length < 2 ? "0" + date.getHours() : date.getHours();
let dateMin =
  ("" + date.getMinutes()).length < 2
    ? "0" + date.getMinutes()
    : date.getMinutes();

time.innerHTML = `${dateHour}:${dateMin}`;

setInterval(() => {
  let date = new Date();
  let dateHour =
    ("" + date.getHours()).length < 2 ? "0" + date.getHours() : date.getHours();
  let dateMin =
    ("" + date.getMinutes()).length < 2
      ? "0" + date.getMinutes()
      : date.getMinutes();
  time.innerHTML = `${dateHour}:${dateMin}`;
}, 60000);

// start_menu button click
const startButtonCont = document.querySelector(".start_button_cont");
startButtonCont.addEventListener("click", (event) => {});
