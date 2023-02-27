import jsonData from "./data.json" assert { type: "json" };

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const moonButton = document.querySelector(".moonButton");
const marsButton = document.querySelector(".marsButton");
const europaButton = document.querySelector(".europaButton");
const titanButton = document.querySelector(".titanButton");
const locationName = document.querySelector(".locationName");
const locationDescription = document.querySelector(".locationDescription");
const locationDistance = document.querySelector(".locationDistance");
const locationTravel = document.querySelector(".locationTravel");
const locationImg = document.querySelector(".locationImg");
const locationPicture = document.querySelector(".locationPicture");

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

// Destinations

const moonDestination = () => {
  locationUpdate(0);
};
const marsDestination = () => {
  locationUpdate(1);
};
const europaDestination = () => {
  locationUpdate(2);
};
const titanDestination = () => {
  locationUpdate(3);
};

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

navToggle.addEventListener("click", handleNavToggle);
moonButton.addEventListener("click", moonDestination);
marsButton.addEventListener("click", marsDestination);
europaButton.addEventListener("click", europaDestination);
titanButton.addEventListener("click", titanDestination);
