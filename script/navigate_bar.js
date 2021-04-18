// const turnOffBut = document.querySelector(".off");
// turnOffBut.addEventListener("click", () => {
//   close();
// });

const navigateBar = desktop.querySelector(".navigate_bar");
Array.from(navigateBar.querySelectorAll(".to_change_img")).forEach((el, i) => {
  if (el.dataset.imgName !== "start_but") {
    el.dataset.id = i + 1;
    const inHoverBlock = document.querySelector(
      ' .task_bar_items_cont [data-id="' + (i + 1) + '"]'
    );
    el.addEventListener("mouseenter", (event) => {
      if (event.target.dataset.id < 5) {
        inHoverBlock.querySelector(".click_me_animate").style.display = "block";
      }
    });
    el.addEventListener("mouseleave", (event) => {
      if (event.target.dataset.id < 5) {
        inHoverBlock.querySelector(".click_me_animate").style.display = "none";
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target === document.querySelector(".navigate_item_img")) {
    navigateBar.classList.toggle("styles_for_nav_bar");

    if (document.querySelector(".modal")) {
      globModal.close();
    }
  }
});
