const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);

const task1_h1 = document.querySelector("h1");
console.log("Task 1.1:", task1_h1);

const task1_content = document.querySelectorAll(".content");
console.log("Task 1.2:", task1_content);

const task1_form = document.getElementById("contact-form");
console.log("Task 1.3:", task1_form);

const task1_email = document.querySelector("#contact-form input[type='email']");
console.log("Task 1.4:", task1_email);

const task1_navItems = document.querySelectorAll("nav li");
console.log("Task 1.5:", task1_navItems);

const task1_firstNavLink = document.querySelector(".nav-link");
console.log("Task 1.6:", task1_firstNavLink);

const task1_lastArticleP = document.querySelector("article p:last-of-type");
console.log("Task 1.7:", task1_lastArticleP);

const task1_submitBtn = document.querySelector("button[type='submit']");
const task1_mainH2s = document.querySelectorAll("main h2");
const task1_footer = document.querySelector("footer");
console.log("Task 1.8:", task1_submitBtn);
console.log("Task 1.9:", task1_mainH2s);
console.log("Task 1.10:", task1_footer);

const nonExistent = document.querySelector(".does-not-exist");
console.log("Task 1 Non-existent:", nonExistent);

const navTextArray = [...task1_navItems].map(item => item.textContent);
console.log("Task 1 Nav array:", navTextArray);

const headerEl = document.querySelector("header");
const navFromHeader = headerEl.querySelector("nav");
console.log("Task 2.1:", navFromHeader);

const parentLi = task1_firstNavLink.parentElement;
console.log("Task 2.2:", parentLi);

const articleEl = document.querySelector("article");
const articleNextSibling = articleEl ? articleEl.nextElementSibling : null;
console.log("Task 2.3:", articleNextSibling);

const navUl = document.querySelector("nav ul");
const ulChildren = navUl ? navUl.children : null;
console.log("Task 2.4:", ulChildren);

const footerEl = document.querySelector("footer");
const footerBody = footerEl ? footerEl.parentElement : null;
console.log("Task 2.5:", footerBody);

const headerClosest = task1_firstNavLink.closest("header");
console.log("Task 2.6:", headerClosest);

task1_h1.textContent = "Hope's Form";

task1_firstNavLink.href = "https://developer.mozilla.org";
task1_firstNavLink.setAttribute("target", "_blank");
task1_firstNavLink.setAttribute("rel", "noopener");

if (articleEl) {
  console.log("Article data-id:", articleEl.dataset.id);
  console.log("Article data-category:", articleEl.dataset.category);
  articleEl.dataset.status = "reviewed";
}

const contentParagraphs = document.querySelectorAll(".content");
if (contentParagraphs.length > 0) {
  contentParagraphs[0].classList.add("highlight");
}
if (contentParagraphs.length > 1) {
  contentParagraphs[1].classList.toggle("accent");
}

const userInput = `<img src="x" onerror="alert('hacked!')">`;
const unsafeDiv = document.getElementById("unsafe");
const safeDiv = document.getElementById("safe");

if (unsafeDiv) unsafeDiv.innerHTML = userInput;
if (safeDiv) safeDiv.textContent = userInput;
// I would use textContent because it treats user input strictly as plain text, preventing malicious HTML or scripts from executing.

function addNavItem(text, href) {
  const navList = document.querySelector(".nav-list");
  if (navList) {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    newA.className = "nav-link";
    newA.href = href;
    newA.textContent = text;
    newLi.appendChild(newA);
    navList.appendChild(newLi);
  }
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

if (articleEl) {
  const newP = document.createElement("p");
  newP.textContent = "This is a newly inserted paragraph before the article's first paragraph.";
  const firstArticleP = articleEl.querySelector("p");
  if (firstArticleP) {
    articleEl.insertBefore(newP, firstArticleP);
  }
}

const navListTarget = document.querySelector(".nav-list");
const firstLi = document.querySelector(".nav-list li");
if (navListTarget && firstLi) {
  const clonedLi = firstLi.cloneNode(true);
  const clonedLink = clonedLi.querySelector("a");
  if (clonedLink) {
    clonedLink.textContent = "Cloned";
  }
  navListTarget.prepend(clonedLi);
}

if (footerEl) {
  footerEl.remove();
}