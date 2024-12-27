import resultsBase from "../results/resultsBase.js";
import { resetSelectedQuestions } from "./quizQuestionButtonSelector.js";
import { showQuestion } from "./quizTemplate.js";
import quizLinesColor from "./quizLines/quizLinesColor.js";


export function quizNextSlide(questions, currentQuestion) {
    const nextQuizSelector = document.querySelector("#nextQuiz");

    nextQuizSelector.disabled = true;
    nextQuizSelector.classList.remove("active");

    let currentQuestionIndex = parseInt(localStorage.getItem("currentQuestionIndex") || "0");

    nextQuizSelector.onclick = () => {
        const answers = JSON.parse(localStorage.getItem(`Answers${currentQuestion}`) || "[]");

        if (answers.length > 0 && currentQuestionIndex < questions.length - 1) {
            const questionContent = document.querySelector("#questionButtons");
            if (questionContent) {
                questionContent.innerHTML = "";
            }

            currentQuestionIndex++;
            localStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());

            resetSelectedQuestions();
            showQuestion(questions, currentQuestionIndex);

            nextQuizSelector.disabled = true;
            nextQuizSelector.classList.remove("active");

            quizLinesColor(currentQuestionIndex);
        } else {
            resultsBase(currentQuestion);
        }
    };
}