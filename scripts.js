const mainEl = document.querySelector("main");
mainEl.classList.add('flex-ctr')

mainEl.style.backgroundColor = 'var(--main-bg)';

const mainH1 = document.createElement("h1");
mainH1.textContent = "DOM Manipulation";

mainEl.appendChild(mainH1);