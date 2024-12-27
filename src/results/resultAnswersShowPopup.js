export default function resultAnswersShowPopup() {
    const ResultAnwsersSelector = document.querySelector("#quizResultAnwsers");
    const viewAnswersSelector = document.querySelector("#viewAnswers");
    const quizResultsSelector = document.querySelector("#quizResults");

    viewAnswersSelector.addEventListener("click", () => {
        ResultAnwsersSelector.classList.remove("display-none");
        quizResultsSelector.classList.add("display-none");
    });
}