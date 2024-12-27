export default function resultsBackToHome() {
    const resultPopopSelector = document.querySelector("#quizResults");
    const takeNewQuizSelector = document.querySelector("#takeNewQuiz");
    const quizPopupSelector = document.querySelector("#quizPopup");
    const backToHomeButtonSelector = document.querySelector("#backToHome");

    takeNewQuizSelector.addEventListener("click", () => {
        resultPopopSelector.classList.add("display-none");
        quizPopupSelector.classList.add("display-none");
        localStorage.clear();
    });

    backToHomeButtonSelector.addEventListener("click", () => {
        resultPopopSelector.classList.add("display-none");
        quizPopupSelector.classList.add("display-none");
        localStorage.clear();
    });
}

