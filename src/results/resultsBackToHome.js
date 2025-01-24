export default function resultsBackToHome() {
    const resultPopopSelector = document.querySelector("#quizResults");
    const takeNewQuizSelector = document.querySelector("#takeNewQuiz");
    const quizPopupSelector = document.querySelector("#quizPopup");
    const backToHomeButtonSelector = document.querySelector("#backToHome");
    const removeQuizWrapper = document.querySelector(".quiz-wrapper");

    takeNewQuizSelector.addEventListener("click", () => {
        resultPopopSelector.classList.add("display-none");
        quizPopupSelector.classList.add("display-none");

        removeQuizWrapper.classList.remove("display-none");
        localStorage.clear();
    });

    backToHomeButtonSelector.addEventListener("click", () => {
        resultPopopSelector.classList.add("display-none");
        quizPopupSelector.classList.add("display-none");

        removeQuizWrapper.classList.remove("display-none");
        localStorage.clear();
    });
}

