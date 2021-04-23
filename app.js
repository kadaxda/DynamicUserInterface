function addDropDownBtn() {
  const wrap = document.querySelector(".wrap");
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
  wrap.appendChild(dropDownContainer);
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
  let imageSliderContainer = document.getElementById("imageSliderContainer");
  const currentImage = document.querySelector(".currentImage");
  const backBtn = document.querySelector("#back");
  const forwardsBtn = document.querySelector("#forward");
  const dotContainer = document.querySelector(".dotContainer");
  let posX = 0;

  // let a = setInterval(moveForwards, 5000);

  for (let i = 0; i < imageArray.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", `css/${imageArray[i]}`);
    image.setAttribute("width", "395px");
    image.setAttribute("height", "220px");
    image.setAttribute("id", "image");
    image.setAttribute("z-index", "-1");
    imageSliderContainer.appendChild(image);
  }

  for (let i = 0; i < imageArray.length; i++) {
    let dot = document.createElement("div");
    dot.setAttribute("class", "material-icons-outlined");
    dot.setAttribute("id", "dot");
    dot.textContent = "fiber_manual_record";
    dotContainer.appendChild(dot);
  }

  let dots = document.querySelectorAll("#dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      console.log(e);
    });
  });

  forwardsBtn.addEventListener("click", moveForwards);
  backBtn.addEventListener("click", moveBack);

  function moveForwards() {
    posX = posX - 395;

    if (posX == -imageArray.length * 395) {
      posX = 0;
    }

    imageSliderContainer.style.left = `${posX}px`;
  }

  function moveBack() {
    posX = posX + 395;

    if (posX > 0) {
      posX = -(imageArray.length - 1) * 395;
    }
    imageSliderContainer.style.left = `${posX}px`;
  }
}

addImageSlider(imagesArray);
