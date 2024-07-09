/*
const linkHome = document.querySelector('[data-js="link-home"]');
const linkBookmarked = document.querySelector('[data-js="link-bookmarked"]');
const linkCreate = document.querySelector('[data-js="link-create"]');
const linkProfile = document.querySelector('[data-js="link-profile"]');

const pageHome = document.querySelector('[data-js="page-home"]');
const pageBookmarked = document.querySelector('[data-js="page-bookmarked"]');
const pageCreate = document.querySelector('[data-js="page-create"]');
const pageProfile = document.querySelector('[data-js="page-profile"]');

linkHome.addEventListener("click", () => {
  pageHome.classList.add("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.remove("current");
});

linkBookmarked.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.add("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.remove("current");
});

linkCreate.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.add("current");
  pageProfile.classList.remove("current");
});

linkProfile.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.add("current");
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav a");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach((page) => {
      if (page.dataset.js === pageId) {
        page.classList.add("current");
      } else {
        page.classList.remove("current");
      }
    });
  }

  document.querySelector(".nav").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const pageId = event.target.getAttribute("href").substring(1); // Get id from href
      showPage(`page-${pageId}`);
    }
  });

  // Show initial page based on the URL hash or default to home
  const initialPage = window.location.hash
    ? `page-${window.location.hash.substring(1)}`
    : "page-home";
  showPage(initialPage);
});
