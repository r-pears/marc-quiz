export default function resultBackToHome() {
    const backToHomeSelector = document.querySelector("#resultsBackToHome");

    const quizResultsSelector = document.querySelector("#quizResults");
    const resultAnwsersSelector = document.querySelector("#quizResultAnwsers");
    const quizPopupSelector = document.querySelector("#quizPopup");

    backToHomeSelector.addEventListener("click", () => {
        resultAnwsersSelector.classList.add("display-none");
        quizResultsSelector.classList.add("display-none");
        quizPopupSelector.classList.add("display-none");

        localStorage.clear();
    });
}