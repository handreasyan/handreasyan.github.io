function itemCreator(event, arr) {
  if (document.querySelector(".active_item")) {
    document.querySelector(".active_item").classList.remove("active_item");
  }
  if (event !== null) {
    event.target.classList.add("active_item");
  }
  const fillBlock = document.querySelector(".programs_section");
  fillBlock.innerHTML = "";
  arr.forEach((page) => {
    const itemBlock = document.createElement("div");
    itemBlock.classList.add("program_link");
    itemBlock.innerHTML = `
      <span class="page_cover_animate"> ${page.title}</span>
      <a href="${page.link}" target="blank" class="pagesHref">
        <img src=${page.src} />
      </a>
    `;
    fillBlock.appendChild(itemBlock);
  });
}

const pagesArr = [
  {
    id: 1,
    title: "My Portfolio",
    link: "https://github.com/handreasyan/handreasyan.github.io",
    src: "images/works/portfolio.png",
  },
  {
    id: 2,
    title: "Interior Design used HTML/CSS",
    link: "https://handreasyan.github.io/Interior-Design/",
    src: "images/works/interiorDesign.png",
  },
  {
    id: 3,
    title: "Grid Responsive Design",
    link: "https://handreasyan.github.io/Grid-Responsive-Design/",
    src: "images/works/grid_design.png",
  },
  {
    id: 4,
    title: "Design Using SCSS technology",
    link: "https://handreasyan.github.io/SCSS-Design/",
    src: "images/works/scss.png",
  },
  {
    id: 5,
    title: "Peace Design used HTML/CSS",
    link: "https://handreasyan.github.io/Peace-Design/",
    src: "images/works/peace.png",
  },
  {
    id: 6,
    title: "Side Menu with Wave Effect",
    link: "https://handreasyan.github.io/Side-Menu-with-Wave-Effect/",
    src: "images/works/hoverEffect.jpg",
  },
  {
    id: 7,
    title: "Multi-Page WebSite Kino Monster",
    link: "https://handreasyan.github.io/KinoMonster-Template/",
    src: "images/works/kinomonster.png",
  },
  {
    id: 8,
    title: "SCSS Responsive Design",
    link: "https://github.com/handreasyan/responsive_design_SCSS",
    src: "images/works/scssrespose.png",
  },
  {
    id: 9,
    title: "JavaScript Scrolling and Cursor Effects",
    link: "https://handreasyan.github.io/JS-Scrolling-and-Cursor-Effects/",
    src: "images/works/effectCursor.png",
  },
  {
    id: 10,
    title: "HTML/CSS Template",
    link: "https://github.com/handreasyan/HTML-CSS-Template",
    src: "images/works/template1.png",
  },
  {
    id: 11,
    title: "HTML/CSS Template",
    link: "https://handreasyan.github.io/HTML-CSS-Template2/",
    src: "images/works/template2.png",
  },
];
const $pages = document.querySelector(".pages");
$pages.addEventListener("click", (event) => {
  itemCreator(event, pagesArr);
});

const appsArr = [
  {
    id: 1,
    title: "Snake Game Using Canvas",
    link: "https://github.com/handreasyan/Snake-Game-using-Canvas",
    src: "images/works/snake.png",
  },
  {
    id: 2,
    title: "Ping Pong Game Using Canvas",
    link: "https://github.com/handreasyan/Ping-Pong-Game-Canvas",
    src: "images/works/pong.png",
  },
  {
    id: 3,
    title: "Ninja VS Rabbit Game Using Canvas",
    link: "https://github.com/handreasyan/Ninja-vs-Rabbit-using-Canvas",
    src: "images/works/ninja.jpg",
  },
  {
    id: 4,
    title: "CSS Border Radius Generator Used jQuery",
    link: "https://github.com/handreasyan/CSS-Generator-jQuery",
    src: "images/works/jq.png",
  },
  {
    id: 5,
    title: "Password Generator",
    link: "https://github.com/handreasyan/Password-Generator",
    src: "images/works/pass.jpg",
  },
  {
    id: 6,
    title: "Phonebook",
    link: "https://github.com/handreasyan/Phonebook",
    src: "images/works/phonebook.png",
  },
  {
    id: 7,
    title: "Search",
    link: "https://github.com/handreasyan/Search",
    src: "images/works/search.png",
  },
  {
    id: 8,
    title: "Form Validator",
    link: "https://github.com/handreasyan/Form-Validator",
    src: "images/works/form.png",
  },
  {
    id: 9,
    title: "Tic Tac Toe",
    link: "https://github.com/handreasyan/Tic-Tac-Toe",
    src: "images/works/titac.png",
  },
  {
    id: 10,
    title: "Modal Plugin",
    link: "https://github.com/handreasyan/Modal-Window",
    src: "images/works/modal.jpg",
  },
  {
    id: 11,
    title: "Select Plugin",
    link: "https://github.com/handreasyan/Select-plugin",
    src: "images/works/select.jpg",
  },
];
const $apps = document.querySelector(".apps");
$apps.addEventListener("click", (event) => {
  itemCreator(event, appsArr);
});

const tasksArr = [
  {
    id: 1,
    title: "Using Array Methods",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/usingArrayMethods.html",
    src: "images/works/tasks/arraymethods.png",
  },
  {
    id: 2,
    src: "images/works/tasks/arraymethods.png",
    title: "Sort, Every, Some, Methods Implementation + Recursion",
    link:
      "https://github.com/handreasyan/array-methods-implementation/blob/main/some_every_sort.html",
  },
  {
    id: 3,
    title: "Filter, Map, Reduce Methods Implementation",
    link:
      "https://github.com/handreasyan/array-methods-implementation/blob/main/Filter%2CMap%2CReduce%20implement/index.js",
    src: "images/works/tasks/arraymethods.png",
  },
  {
    id: 4,
    title: "Entries and Values Methods Implementation",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/entires%20and%20values%20implementation.html",
    src: "images/works/tasks/entries.jpg",
  },
  {
    id: 5,
    title: " Rotate Matrix,  Algorithms",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Matrix%20Rotate.html",
    src: "images/works/tasks/matrix.jpg",
  },
  {
    id: 6,
    title: "Deep Clone an Object",
    link:
      "https://github.com/handreasyan/Deep-Clone-an-Object/blob/main/init.js",
    src: "images/works/tasks/objClone.png",
  },
  {
    id: 7,
    title: "Math Tasks,Implementation Math methods",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Math%20Tasks.html",
    src: "images/works/tasks/math.png",
  },
  {
    id: 8,
    title: "Fizz Buzz (with 1 if )",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/fizzbuzz%20task.html",
    src: "images/works/tasks/fizz.jpg",
  },
  {
    id: 9,
    title: "Practical Tasks",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Practical%20JS%20Tasks.html",
    src: "images/works/tasks/practical.jpg",
  },
  {
    id: 10,
    title: "Tasks From Eloquent JS Book",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/tasks%20of%20eloquent%20javascript%20book.html",
    src: "images/works/tasks/book.jpg",
  },
  {
    id: 11,
    title: "Checking Username and Password used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_admin%2Clog%2C.html",
    src: "images/works/tasks/log.jpg",
  },
  {
    id: 12,
    title: "Stack Calculator used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_%20StackCalculator.html",
    src: "images/works/tasks/calc.jpg",
  },
  {
    id: 13,
    title: "Class Alice vs BoB used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_Alice%20vs%20Bob.html",
    src: "images/works/tasks/alice.png",
  },
  {
    id: 14,
    title: "Bear and Fish used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_Bears%20and%20Fish.html",
    src: "images/works/tasks/bear.jpg",
  },
  {
    id: 15,
    title: "JavaScript Class Inheritance",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_Makeing%20Coffe.html",
    src: "images/works/tasks/coffe.jpg",
  },
  {
    id: 16,
    title: "Japanese word game Shiritori used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_Shiritori%20Game%20.html",
    src: "images/works/tasks/shiritori.png",
  },
  {
    id: 17,
    title: "Smoothie used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_Smoothie.html",
    src: "images/works/tasks/smoot.jpg",
  },
  {
    id: 18,
    title: "Class Page Control used Classes in JS",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Class_WebPagesControl.html",
    src: "images/works/tasks/page.jpeg",
  },
  {
    id: 19,
    title: "Algorithms, Figures",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Geometric%20Figures.html",
    src: "images/works/tasks/figures.png",
  },
  {
    id: 20,
    title: "Algorithms, Data structures",
    link:
      "https://github.com/handreasyan/Practical-Javascript-Tasks/blob/main/Brackets.html",
    src: "images/works/tasks/brackets.jpg",
  },
];
const $tasks = document.querySelector(".tasks");
$tasks.addEventListener("click", (event) => {
  itemCreator(event, tasksArr);
});

// page close
const $offbut = document.querySelector(".off img");
$offbut.addEventListener("click", (event) => {
  const closeOrNot = confirm("Do you want to close this site ?");
  closeOrNot ? window.close() : "";
});

// show/hide start menu
const startButton = document.querySelector(".start_button_cont");
startButton.addEventListener("click", () => {
  itemCreator(null, pagesArr);
  const panel = document.querySelector(".start_menu_content");
  panel.classList.toggle("left");
  if (document.querySelector(".modal")) {
    window.globModal.close();
  }
});
