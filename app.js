const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const handleNavToggle = () => {
  const menuVisibility = nav.getAttribute("data-visible");

  if (menuVisibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
};

navToggle.addEventListener("click", handleNavToggle);
