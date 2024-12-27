import resultAnswersShowPopup from "../resultAnswersShowPopup.js";
import { displayQuestionResult } from "./resultAnswersTemplate.js";
import resultBackToHome from "./resultBackToHome.js";

export default function resultAnswersPage(correctAnswers, allUserAnswers) {
    resultAnswersShowPopup();
    resultBackToHome();

    const quizResultAnwsersTableSelector = document.querySelector("#quizResultAnwsersTable");

    // Clear any existing content
    quizResultAnwsersTableSelector.innerHTML = '';

    // Process each question
    correctAnswers.forEach((correctAnswer, index) => {
        const userAnswer = allUserAnswers[index];
        displayQuestionResult(
            quizResultAnwsersTableSelector,
            index,
            correctAnswer,
            userAnswer
        );
    });
}