document.addEventListener("DOMContentLoaded", () => {
  globModal.open(
    {
      title: "Welcome",
      innerContent: `
        <div class="welcome_content">
          Hello, this is my portfolio. The site is designed to look like windows 10. The button on the bottom-right corner of the screen will open a navigation panel that will describe in detail how to navigate through the site.<br> <br>On the video displayed below I am demonstrating the full capacity of the site.
          <video class="video" controls >
            <source src="images/present.mp4" type="video/mp4">
          </video>
        </div>
      `,
    },
    document.createElement("div")
  );
});
const desktop = document.getElementById("desktop");
let show = false;
let cx, cy;
function emittingFunc(event) {
  if (event.target === desktop) {
    // for nav bar remove
    document.querySelector(".start_menu_content").classList.remove("left");

    // for nav bar remove
    /**/ const navigate_bar = desktop.querySelector(".navigate_bar");
    /**/ navigate_bar.classList.remove("styles_for_nav_bar");
    // -------------------
    show = true;
    const emittingBoard = document.createElement("span");
    emittingBoard.classList.add("emittingBoard");
    emittingBoard.setAttribute("data-type", "temporary");
    emittingBoard.style.left = event.clientX + "px";
    emittingBoard.style.top = event.clientY + "px";

    cx = event.clientX;
    cy = event.clientY;
    desktop.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      if (x < cx && y < cy) {
        emittingBoard.style.width = cx - x + "px";
        emittingBoard.style.height = cy - y + "px";

        emittingBoard.style.left = x + "px";
        emittingBoard.style.top = y + "px";
      }
      if (x < cx && y > cy) {
        emittingBoard.style.width = cx - x + "px";
        emittingBoard.style.height = y - cy + "px";

        emittingBoard.style.left = x + "px";
      }
      if (x > cx && y < cy) {
        emittingBoard.style.width = x - cx + "px";
        emittingBoard.style.height = cy - y + "px";

        emittingBoard.style.top = y + "px";
      }
      if (x > cx && y > cy) {
        emittingBoard.style.width = x - cx + "px";
        emittingBoard.style.height = y - cy + "px";
      }
    });

    desktop.appendChild(emittingBoard);
  }
}
desktop.addEventListener("mousedown", emittingFunc);
document.addEventListener("mouseup", (ev) => {
  if (show) {
    if (!ev.target.classList.contains("dontRemove")) {
      document
        .querySelectorAll("[data-type='temporary']")
        .forEach((f) => f.remove());
    }
  }
  show = false;
});
