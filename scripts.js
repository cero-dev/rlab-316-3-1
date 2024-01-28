function buildSubMenu(givenElement, mainLinkName, linksArray) {
    givenElement.innerHTML = '';

    linksArray.forEach(linkElement => {
        if (mainLinkName === linkElement.text) {
            linkElement.subLinks.forEach(element => {
                const subLink = document.createElement('a');

                subLink.setAttribute('href', element.href)
                subLink.textContent = element.text.toUpperCase();

                givenElement.appendChild(subLink);
            });
        }
    });
}

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

// get submenu element by id #sub-menu
const subMenuEl = document.getElementById("sub-menu");

// set submenu height, backgroundcolor, and add the class flex-around
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// hide the submenu
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


// add evenet listener for clicks, if it's an anchor element and it doesn't have the class active toggle it,
// otherwise remove any existing active classes from the other elements
topMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "A") {
        topMenuLinks.forEach(anchorElement => {
            if (anchorElement === e.target) {
                if (anchorElement.classList.contains('active')) {
                    anchorElement.classList.remove("active");
                    subMenuEl.style.top = '0';
                }
                else {
                    anchorElement.classList.add("active");
                    menuLinks.forEach(element => {
                        if (element.text === anchorElement.textContent) {
                            if ('subLinks' in element) {
                                subMenuEl.style.top = '100%';
                                buildSubMenu(subMenuEl, anchorElement.textContent, menuLinks)
                            } else {
                                subMenuEl.innerHTML = ""
                                subMenuEl.style.top = '0';
                                mainH1.textContent = element.text.toUpperCase();
                            }
                        }
                    });
                }
            }
            else {
                anchorElement.classList.remove("active");
            }
        });
    } else {
        return;
    }
})

// event listener for the sub links, removes active if clicked and changes H1 element to name of the link
subMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "A") {
        subMenuEl.style.top = "0";
        topMenuLinks.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        mainH1.textContent = e.target.textContent
    } else {
        return;
    }
})