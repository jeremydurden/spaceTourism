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

const skipToContent = document.querySelector(".skip-to-content");

const handleSkipToContentToggle = () => {
  const skipVisibility = skipToContent.getAttribute("data-visible");
  console.log("first");

  if (skipVisibility === "false") {
    skipToContent.setAttribute("data-visible", true);
  }
};

skipToContent.addEventListener("focus", handleSkipToContentToggle);
