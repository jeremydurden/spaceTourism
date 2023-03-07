import jsonData from "./data.json" assert { type: "json" };

const locationName = document.querySelector(".locationName");
const locationDescription = document.querySelector(".locationDescription");
const locationDistance = document.querySelector(".locationDistance");
const locationTravel = document.querySelector(".locationTravel");
const locationImg = document.querySelector(".locationImg");
const locationPicture = document.querySelector(".locationPicture");

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

  if (tabPanel === "moon") {
    panelChange(0);
  }
  if (tabPanel === "mars") {
    panelChange(1);
  }
  if (tabPanel === "europa") {
    panelChange(2);
  }
  if (tabPanel === "titan") {
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

const locationUpdate = (planetIndex) => {
  //update name
  locationName.innerText = jsonData.destinations[planetIndex].name;
  //update description
  locationDescription.innerText =
    jsonData.destinations[planetIndex].description;
  //update travel distance
  locationDistance.innerText = jsonData.destinations[planetIndex].distance;
  //update travel time
  locationTravel.innerText = jsonData.destinations[planetIndex].travel;
  //update picture srcset
  locationPicture.srcset = `${jsonData.destinations[planetIndex].images.webp}`;
  //update image source
  locationImg.src = `${jsonData.destinations[planetIndex].images.png}`;
  //update image alt
  if (planetIndex === 0) {
    locationImg.alt = `The ${jsonData.destinations[planetIndex].name}`;
  } else {
    locationImg.alt = jsonData.destinations[planetIndex].name;
  }
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
