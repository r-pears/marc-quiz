import quizButtons from "./quizButtons.js";
import quizHeader from "./quizHeader.js";
import quizLinesCreator from "./quizLines/quizLinesCreator.js";
import { quizNextSlide } from "./quizNextSlide.js";
import quizQuitButton from "./quizQuitButton.js";

export default function quizTemplate() {
    if ("content" in document.createElement("template")) {
        const quizPopupSelector = document.querySelector("#quizPopup");
        const template = document.querySelector("#quizQuestions");
        const storedData = localStorage.getItem("questions");

        if (storedData) {
            try {
                const questions = JSON.parse(storedData);
                let currentQuestion = 0;

                if (questions.length > 0) {
                    const clone = template.content.cloneNode(true);
                    quizPopupSelector.appendChild(clone);

                    quizQuitButton();
                    quizLinesCreator(questions);
                    showQuestion(questions, currentQuestion);
                    quizNextSlide(questions, currentQuestion);
                }
            } catch (error) {
                console.error("Error parsing questions data:", error);
            }
        } else {
            console.log("No questions data found in localStorage");
        }
    }

}

export function showQuestion(questions, questionIndex) {
    const currentQuestion = questions[questionIndex];
    quizHeader(currentQuestion, questionIndex);
    quizButtons(currentQuestion, questionIndex);
}