import quizButtonValidation from "./quizQuestionButtonSelector.js";

export default function quizButtons(question, questionIndex) {

    const questionsCorrect = question.correct_answer;
    const questionsIncorrect = question.incorrect_answers;

    questionsIncorrect.push(questionsCorrect);

    const shuffledAnswers = questionsIncorrect.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(question => {

        const questionButtonsSelector = document.querySelector("#questionButtons");

        const button = document.createElement("button");
        button.textContent = question;
        button.value = question;
        button.onclick = () => quizButtonValidation(button, questionIndex);

        questionButtonsSelector.appendChild(button);

    });

}