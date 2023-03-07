import jsonData from "./data.json" assert { type: "json" };

const crewRole = document.querySelector(".crewRole");
const crewName = document.querySelector(".crewName");
const crewBio = document.querySelector(".crewBio");

const crewImage = document.querySelector(".crewImage");
const crewPicture = document.querySelector(".crewPicture");

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

const changeTabPanel = (e) => {
  const targetTab = e.target;
  const tabPanel = targetTab.dataset.tabPanel;
  const tabParentContainer = targetTab.parentNode;

  tabParentContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);
  targetTab.setAttribute("aria-selected", true);

  if (tabPanel === "commander") {
    panelChange(0);
  }
  if (tabPanel === "specialist") {
    panelChange(1);
  }
  if (tabPanel === "pilot") {
    panelChange(2);
  }
  if (tabPanel === "engineer") {
    panelChange(3);
  }
};

const changeTabFocus = (e) => {
  // these are the key codes that get returned if you press <-- or -->
  const keydownLeft = 37;
  const keydownRight = 39;
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }
  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
};

const panelChange = (index) => {
  locationUpdate(index);
};

const changeActiveTab = () => {};

const locationUpdate = (crewIndex) => {
  //update name
  crewName.innerText = jsonData.crew[crewIndex].name;
  //update role
  crewRole.innerText = jsonData.crew[crewIndex].role;
  //update crewBio
  crewBio.innerText = jsonData.crew[crewIndex].bio;

  //update picture srcset
  crewPicture.srcset = `${jsonData.crew[crewIndex].images.webp}`;
  //update image source
  crewImage.src = `${jsonData.crew[crewIndex].images.png}`;
  //update image alt
  crewImage.alt = `${jsonData.crew[crewIndex].name}`;
};

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

// navToggle.addEventListener("click", handleNavToggle);
// moonButton.addEventListener("click", moonDestination);
// marsButton.addEventListener("click", marsDestination);
// europaButton.addEventListener("click", europaDestination);
// titanButton.addEventListener("click", titanDestination);
