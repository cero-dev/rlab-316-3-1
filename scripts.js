// menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

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

// created element from the id #top-menu
const topMenuEl = document.getElementById("top-menu");

// setting the height, background color, and adding the class 'flex-around' to topMenuEl
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");

let topMenuLinks = []

// for each element in the array, create an anchor tag, set it's href to the href in the object
// and the text content to the text in the object.
menuLinks.forEach(element => {
    const newAnchorElement = document.createElement("a")
    newAnchorElement.setAttribute('href', element.href)
    newAnchorElement.textContent = element.text;

    topMenuEl.appendChild(newAnchorElement);
    topMenuLinks.push(newAnchorElement);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

topMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "A") {
        topMenuLinks.forEach(element => {
            if (element === e.target) {
                element.classList.toggle("active");
            } else {
                element.classList.remove("active");
            }
        });
    } else {
        return;
    }
})