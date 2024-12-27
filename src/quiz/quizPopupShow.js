import quizTemplate from "./quizTemplate.js";

export function quizPopupShow() {
    const quizPopupSelector = document.querySelector("#quizPopup");
    quizPopupSelector.classList.remove("display-none");

    quizTemplate();
}