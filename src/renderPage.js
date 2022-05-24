import notepad from "./components/imgs/notes.png";
import "./components/styles/mainpage.css";

function renderPage() {
    
    // top bar

    const topBar = document.createElement("div");
    topBar.classList.add("topBar");

        // notepad icon for topbar
    const notepadImage = new Image();
    notepadImage.src = notepad;
    notepadImage.classList.add("notepadImage");
    topBar.appendChild(notepadImage);

        // title for topbar
    const topBarTitle = document.createElement("div");
    topBarTitle.classList.add("topBarTitle");
    topBarTitle.textContent = "TO - DO";
    topBar.appendChild(topBarTitle);

    document.querySelector(".content").appendChild(topBar);

    // projects overview

    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    document.querySelector(".content").appendChild(sideBar);

    // todos overview

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    document.querySelector(".content").appendChild(mainContainer);
};

export default renderPage;