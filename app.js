function addDropDownBtn() {
  // Drop Down Button
  const dropDownBtn = document.createElement("button");
  dropDownBtn.setAttribute("id", "dropDownBtn");
  dropDownBtn.textContent = "Drop down";

  // Drop Down Container
  const dropDownContainer = document.createElement("div");
  dropDownContainer.classList.add("dropDownContainer");

  // Gets the HTML with class dropDownContent
  let dropDownContent = document.querySelector(".dropDownContent");

  let temp = document.createElement("div");
  temp.innerHTML = dropDownContent.innerHTML;
  temp.classList.add("dropDownContent");
  dropDownContainer.appendChild(temp);

  dropDownBtn.addEventListener("click", () => {
    dropDownBtn.parentElement.firstChild.classList.toggle("visible");
  });

  dropDownContent.parentElement.removeChild(dropDownContent);
  dropDownContainer.appendChild(dropDownBtn);
  document.body.appendChild(dropDownContainer);
}

addDropDownBtn();

function addMenuDrawer() {
  const menuContainer = document.querySelector(".menuContainer");
  const menuIcon = document.querySelector("#menuIcon");

  let menuContent = document.querySelector(".menuContent");

  menuIcon.addEventListener("click", () => {
    let menuBackground = document.querySelector(".menuBackground");
    menuBackground.classList.toggle("menuActivated");
    menuContent.classList.toggle("menuTextActivated");
  });
}
addMenuDrawer();

// IMAGE SLIDER

let imagesArray = [
  "autumn.jpg",
  "field.jpg",
  "forest.jpg",
  "graffiti.jpg",
  "sky.jpg",
  "taxi.jpg",
];

function addImageSlider(imageArray) {
  const imageSliderContainer = document.querySelector(".imageSliderContainer");
  const currentImage = document.querySelector(".currentImage");

  for (let i = 0; i < imageArray.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", `css/${imageArray[i]}`);
    image.setAttribute("width", "395px");
    image.setAttribute("height", "220px");
    image.setAttribute("id", "image");
    image.setAttribute("z-index", "-1");
    imageSliderContainer.appendChild(image);
  }

  currentImage.addEventListener("click", () => {
    console.log("H");
    imageSliderContainer.setAttribute("transform", "translate(-400px)");
  });
}

addImageSlider(imagesArray);
