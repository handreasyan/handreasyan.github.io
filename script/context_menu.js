localStorage.setItem("datkTheme", "true");
document.addEventListener("click", (event) => {
  document.ondragstart = () => false;
  document.onselectstart = () => false;
  /*
     event.preventDefault();

    sa comentelem vorovhetev start_menu.js i mej erb vor linkei sarqum ira clicke ccher ashxatum , chem hishum te xiei esi grel u comenteluc heto voncor te vochi ban chi xaxtvum , ete yntacqum buger arajanan sra het mi ban kanenq ))
  */
  if (
    !event.target.classList.contains("dontRemove") &&
    document.querySelector(".contextMenu")
  ) {
    document.querySelector(".contextMenu").remove();
  }
});
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (
    !event.target.classList.contains("dontRemove") &&
    document.querySelector(".contextMenu")
  ) {
    document.querySelector(".contextMenu").remove();
  }
});
let checked = true;
desktop.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  if (
    event.target === desktop ||
    event.target === document.querySelector(".cursor")
  ) {
    const contextMenu = document.createElement("div");
    contextMenu.classList.add("contextMenu");
    contextMenu.classList.add("dontRemove");
    contextMenu.addEventListener("click", darkThemeFunc);
    contextMenu.setAttribute("data-type", "temporary");
    const checkedDark = localStorage.getItem("datkTheme");
    contextMenu.innerHTML = `
      <div class="item dontRemove dark_theme">
        <span class="dark_theme_cover_span dontRemove"></span>
        Dark Theme
        <input id="dark_theme" type="checkbox" checked="${checkedDark}" 
          class="dark_theme_checkbox ${checked ? "checked" : ""}" />
        <label for="dark_theme" class="checkbox_label"></label>
      </div>
      <div class="item dontRemove openNav">Show Navigation Panel</div>
      <div class="item dontRemove openStartMenu">Show Start Menu</div>
      <div class="forMargin dontRemove"></div>
      <div class="item cursorEffect">Cursor Effect ON/OFF</div>
      <div class="item desktopBG">Desktop Background</div>
    `;

    contextMenu.style.left = cx + "px";
    contextMenu.style.top = cy + "px";
    const cmWidth = 200; //standard size for all screens
    const cmHeight = 250; //standard size for all screens
    if (desktop.clientWidth - cmWidth < cx) {
      contextMenu.style.left = cx - cmWidth + "px";
    }
    if (desktop.clientHeight - cmHeight < cy) {
      contextMenu.style.top = cy - cmHeight + "px";
    }
    contextMenu.style.animation = "showHide 0.5s";

    desktop.appendChild(contextMenu);
    // for nav bar hide
    desktop
      .querySelector(".navigate_bar")
      .classList.remove("styles_for_nav_bar");
    // ------------------
  }
});

const allImagesSources = [
  {
    imgSrc: "images/colored/about_me.png",
    dataAttr: "aboutme",
  },
  {
    imgSrc: "images/colored/apps.png",
    dataAttr: "apps",
  },
  {
    imgSrc: "images/colored/arrowUp.png",
    dataAttr: "arrow",
  },
  {
    imgSrc: "images/colored/contact.png",
    dataAttr: "contact",
  },
  {
    imgSrc: "images/colored/network.png",
    dataAttr: "network",
  },
  {
    imgSrc: "images/colored/pages.png",
    dataAttr: "pages",
  },
  {
    imgSrc: "images/colored/rec_bin.png",
    dataAttr: "rec",
  },
  {
    imgSrc: "images/colored/start_but_icon.png",
    dataAttr: "start_but",
  },
  {
    imgSrc: "images/colored/task_message.png",
    dataAttr: "nav",
  },
  {
    imgSrc: "images/colored/tasks.png",
    dataAttr: "tasks",
  },
  {
    imgSrc: "images/colored/cv-icon.png",
    dataAttr: "cv",
  },
];
const allImagesOldSources = [
  {
    imgSrc: "images/about_me.png",
    dataAttr: "aboutme",
  },
  {
    imgSrc: "images/apps.png",
    dataAttr: "apps",
  },
  {
    imgSrc: "images/arrowUp.png",
    dataAttr: "arrow",
  },
  {
    imgSrc: "images/contact.png",
    dataAttr: "contact",
  },
  {
    imgSrc: "images/network.png",
    dataAttr: "network",
  },
  {
    imgSrc: "images/pages.png",
    dataAttr: "pages",
  },
  {
    imgSrc: "images/rec_bin.png",
    dataAttr: "rec",
  },
  {
    imgSrc: "images/start_but_icon.png",
    dataAttr: "start_but",
  },
  {
    imgSrc: "images/task_message.png",
    dataAttr: "nav",
  },
  {
    imgSrc: "images/tasks.png",
    dataAttr: "tasks",
  },
  {
    imgSrc: "images/cv-icon.png",
    dataAttr: "cv",
  },
];
document.addEventListener("mousemove", (e) => {
  gsap.to(".text", {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.02,
  });
});
function darkThemeFunc(event) {
  if (document.querySelector(".modal")) {
    globModal.close();
  }

  if (event.target.classList.contains("openNav")) {
    desktop.querySelector(".navigate_bar").classList.add("styles_for_nav_bar");
  } else if (event.target.classList.contains("openStartMenu")) {
    document.querySelector(".start_menu_content").classList.add("left");
  } else if (event.target.classList.contains("desktopBG")) {
    globModal.open(
      {
        title: "Change Desktop Background",
        innerContent: `
          <div class="desktopBG_content">
            <div class="coose_content">
              <div class="coose_item">
                <input accept=".jpg, .png, .gif" id="addImage" type="file"name="image"class="add_image" />
                <div class="add_image_button">Choose Background</div>
              </div>
            </div>
            <br>
            <div id="filePreview" class="file_preview"></div>
            <button class="setBG">ADD</button>
          </div>
        `,
      },
      document.createElement("div")
    );
    renderIMG();
  } else if (event.target.classList.contains("cursorEffect")) {
    document.querySelector(".cursor").classList.toggle("cursor_on");
  }
  if (event.target.classList.contains("dark_theme_cover_span")) {
    const checkedDark = localStorage.getItem("datkTheme");
    $checkbox = document.querySelector(".dark_theme_checkbox");
    $checkbox.setAttribute("checked", "false");
    $checkbox.classList.toggle("checked");
    checked = !checked;
    // css link
    const attrLink = document.createElement("link");
    attrLink.rel = "stylesheet";
    attrLink.href = "./styles/colored_theme.css";

    if (checkedDark === "true") {
      document.head.appendChild(attrLink);
      document.querySelector(".desktop").classList.add("desktopBg");

      addNewImages(allImagesSources);
      localStorage.setItem("datkTheme", "false");
      $checkbox.setAttribute("checked", "false");
    } else {
      document.querySelector(".background-container").style.display = "block";
      document.querySelector(".desktop").style.background = "none";
      const linkAttr = document.head.querySelector(
        "[href='./styles/colored_theme.css']"
      );
      linkAttr.parentNode.removeChild(linkAttr);
      addNewImages(allImagesOldSources);

      localStorage.setItem("datkTheme", "true");
      $checkbox.setAttribute("checked", "true");
    }
  }
}
function addNewImages(arr) {
  allImages = document.querySelectorAll(".to_change_img");
  Array.from(allImages).forEach((img) => {
    for (let imgsrc of arr) {
      if (img.dataset.imgName === imgsrc.dataAttr) {
        img.src = imgsrc.imgSrc;
      }
    }
  });
}

function renderIMG() {
  const addImage = document.getElementById("addImage");
  const filePreview = document.getElementById("filePreview");

  addImage.addEventListener("change", () => {
    uploadFile(addImage.files[0]);
    const setBgBut = document.querySelector(".setBG");
    setBgBut.style.display = "block";
    setBgBut.addEventListener("click", () => {
      let reader = new FileReader();
      reader.onload = function (e) {
        globModal.close();
        const desktop = document.querySelector(".desktop");
        document.querySelector(".background-container").style.display = "none";
        desktop.classList.remove("desktopBg");
        desktop.style.background =
          "url('" + e.target.result + "') no-repeat center center  / cover";
      };
      reader.readAsDataURL(addImage.files[0]);
    });
  });

  function uploadFile(file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      filePreview.innerHTML = `<img src="${e.target.result}" alt="BgImage" />`;
    };
    reader.readAsDataURL(file);
  }
}
