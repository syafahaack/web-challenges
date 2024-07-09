/*
const linkHome = document.querySelector('[data-js="link-home"]');
const linkBookmarked = document.querySelector('[data-js="link-bookmarked"]');
const linkCreate = document.querySelector('[data-js="link-create"]');
const linkProfile = document.querySelector('[data-js="link-profile"]');

const pageHome = document.querySelector('[data-js="page-home"]');
const pageBookmarked = document.querySelector('[data-js="page-bookmarked"]');
const pageCreate = document.querySelector('[data-js="page-create"]');
const pageProfile = document.querySelector('[data-js="page-profile"]');

const allPages = document.querySelectorAll('[data-js*="page"]');

linkHome.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageHome.classList.add("current");
});

linkBookmarked.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageBookmarked.classList.add("current");
});

linkCreate.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageCreate.classList.add("current");
});

linkProfile.addEventListener("click", () => {
  allPages.forEach((page) => {
    page.classList.remove("current");
  });
  pageProfile.classList.add("current");
});
*/

const nav = document.querySelector(".nav");
const allPages = document.querySelectorAll('[data-js*="page"]');

function showPage(pageId) {
  allPages.forEach((page) => {
    if (page.dataset.js === pageId) {
      page.classList.add("current");
    } else {
      page.classList.remove("current");
    }
  });
}

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const pageId = event.target.getAttribute("href").substring(1);
    showPage(`page-${pageId}`);
  }
});

// Initial page display based on URL hash or default to home
const initialPageId = window.location.hash
  ? `page-${window.location.hash.substring(1)}`
  : "page-home";
showPage(initialPageId);
