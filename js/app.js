const hamburger_btn = document.querySelector(".hamburger-btn");

// Mobile Nav Slider
const mobile_nav_slider = document.querySelector(".mobile-nav-slider");
const slider_close_btn = document.querySelector(".slider-close-btn");

hamburger_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.add("mobile_nav_slide_show");
});

slider_close_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.remove("mobile_nav_slide_show");
  mobile_nav_dropdown.classList.remove("mobile-nav-dropdown-show");
  mobile_nav_link_i.innerHTML = `<i class="far fa-plus"></i>`;
});

const mobile_nav_link = document.querySelector(".mobile-nav-link");
const mobile_nav_link_i = document.querySelector(".mobile-nav-link-i");
const mobile_nav_dropdown = document.querySelector(".mobile-nav-dropdown");
mobile_nav_link.addEventListener("click", () => {
  mobile_nav_dropdown.classList.toggle("mobile-nav-dropdown-show");
  if (mobile_nav_dropdown.classList.contains("mobile-nav-dropdown-show")) {
    mobile_nav_link.childNodes[1].style.color = "#006c39";
    mobile_nav_link_i.innerHTML = `<i class="far fa-minus"></i>`;
  } else {
    mobile_nav_link_i.innerHTML = `<i class="far fa-plus"></i>`;
    mobile_nav_link.childNodes[1].style.color = "white";
  }
});
