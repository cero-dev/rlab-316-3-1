// selecting the element with the 'main' tag
const mainEl = document.querySelector("main");

// adding a class, and changing backgroundcolor to mainEl
mainEl.classList.add('flex-ctr')
mainEl.style.backgroundColor = 'var(--main-bg)';

// creating new element and setting it's text content
const mainH1 = document.createElement("h1");
mainH1.textContent = "DOM Manipulation";

// attatching the new element to mainEl
mainEl.appendChild(mainH1);

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");
