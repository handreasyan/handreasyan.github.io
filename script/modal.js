
function modalCreateFunc(options) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("data-closeable", "true");
  modal.innerHTML = ` 
			<div class="modal_window">
          <div class="modal_top_border">
              <h2 class="modal_border_name">${options.title}</h2>
              <div class="modal_buttons">
                <span class="modal_square modal_but">
                  <img src="images/max.png" alt="In all Screen" class="all_screen_img" data-src="min">
                </span>
                <span class="modal_close modal_but">
                  <img src="images/window_close.png" alt="Close Modal" data-closeable="true" class="modal_close_img">
                </span>
              </div>
          </div>
				<div class="modal_body">${options.innerContent}</div>
			</div>
		`;
  document.body.appendChild(modal);
  return modal;
}
function modalFunc() {
  let clickedNode;
  let modal;
  let timeOutId;
  let modalMethods = {
    open(options, coverBlock) {
      if (options.id === 3) {
        timeOutId = setTimeout(() => {
          let form = document.getElementById("my-form");
          const textArea = document.getElementById("tarea");
          textArea.onclick = () => {
            textArea.value = "";
          };
          async function handleSubmit(event) {
            if (window.formValid()) {
              let formCover = document.querySelector(".formCover");
              formCover.style.display = "block";
              event.preventDefault();
              let status = document.getElementById("my-form-status");
              let data = new FormData(event.target);
              fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                  Accept: "application/json",
                },
              })
                .then((response) => {
                  status.innerHTML = "Thanks for your submission!";
                  status.classList.add("success");
                  formCover.style.display = "none";
                  form.reset();
                })
                .catch((error) => {
                  status.innerHTML =
                    "Oops! There was a problem submitting your form";
                  status.classList.add("error");
                  formCover.style.display = "none";
                });
            }
          }
          form.addEventListener("submit", handleSubmit);
        }, 500);
      }
      // for start menu hide
      document.querySelector(".start_menu_content").classList.remove("left");

      // for nav bar hide
      desktop
        .querySelector(".navigate_bar")
        .classList.remove("styles_for_nav_bar");
      // ------------------
      clickedNode = coverBlock;
      clickedNode.classList.add("active");
      modal = modalCreateFunc(options);
      modal.setAttribute("data-id", options.id);
      const modalWindow = modal.querySelector(".modal_window");
      setTimeout(() => {
        modalWindow.classList.add("set_style");
      }, 100);

      return true;
    },
    close() {
      clearInterval(timeOutId);
      if (clickedNode) {
        clickedNode.classList.remove("active");
      }
      const modalWindow = document.querySelector(".modal_window");
      modalWindow.classList.remove("set_style");
      setTimeout(() => {
        document.querySelector(".modal").remove();
      }, 100);

      return false;
    },
  };
  document.addEventListener("click", (ev) => {
    if (ev.target.dataset.closeable === "true") {
      setTimeout(() => {
        modalMethods.close();
      }, 100);
    } else if (ev.target === document.querySelector(".all_screen_img")) {
      const allScreenBut = document.querySelector(".all_screen_img");
      const modalWind = modal.querySelector(".modal_window");
      modalWind.classList.toggle("in_all_screen");
      if (allScreenBut.dataset.src === "max") {
        allScreenBut.src = "images/max.png";
        allScreenBut.dataset.src = "min";
      } else {
        allScreenBut.src = "images/min.png";
        allScreenBut.dataset.src = "max";
      }
    }
  });
  return modalMethods;
}

window.globModal = modalFunc();
