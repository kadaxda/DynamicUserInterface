

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
    })

    dropDownContent.parentElement.removeChild(dropDownContent);
    dropDownContainer.appendChild(dropDownBtn);
    document.body.appendChild(dropDownContainer);
}

addDropDownBtn();

function addMenuDrawer() {
    const menuContainer = document.querySelector(".menuContainer");
    const menuIcon = document.querySelector("#menuIcon");
    

    let menuContent = document.querySelector(".menuContent")

    menuIcon.addEventListener("click", () => {
        let menuBackground = document.querySelector(".menuBackground");
        menuBackground.classList.toggle("menuActivated")
        menuContent.classList.toggle("menuTextActivated")

    })

}
addMenuDrawer();