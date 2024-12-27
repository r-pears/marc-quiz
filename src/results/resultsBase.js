import resultsAnswersValidation from "./resultsAnswersValidation.js";
import resultsBackToHome from "./resultsBackToHome.js";

export default function resultsBase(currentQuestion) {
    const resultPopopSelector = document.querySelector("#quizResults");
    resultPopopSelector.classList.remove("display-none");

    resultsBackToHome();
    resultsAnswersValidation(currentQuestion);
}