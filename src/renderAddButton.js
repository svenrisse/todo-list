import "./components/styles/addButton.css"

function renderAddButton() {
    const addButton = document.createElement("button");
    addButton.classList.add("addButton");
    addButton.textContent = "+";
    document.querySelector(".sideBar").appendChild(addButton);
};

export default renderAddButton;