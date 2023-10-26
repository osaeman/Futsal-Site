// JavaScript to toggle the mobile menu
// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgericon = document.querySelector(".hamburger-icon");
//   const mobileMenu = document.querySelector(".mobile-menu");
//   const mob_lang = document.querySelector(".mob-lang");
//   const mob_select_lang = document.querySelector(".mob-select-lang");

//   hamburgericon.addEventListener("click", function () {
//     mobileMenu.classList.toggle("mobile-menu-show");
//   });
//   mob_lang.addEventListener("click", () => {
//     mob_select_lang.classList.toggle("mob-select-lang-show");
//   });
// });

const hamburger_btn = document.querySelector(".hamburger-btn");
const header_nav = document.querySelector(".header-nav ");
hamburger_btn.addEventListener("click", () => {
  header_nav.classList.toggle("header-nav-display");
});
