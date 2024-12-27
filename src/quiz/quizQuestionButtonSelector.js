import { updateNextButtonState } from "./quizNextButton.js";

export function resetSelectedQuestions() {
    selectedQuestions = [];
}

let selectedQuestions = [];

export default function quizButtonValidation(button, questionIndex) {

    if (button.classList.contains("selected-button")) {
        button.classList.remove("selected-button");
        selectedQuestions = selectedQuestions.filter(item => item !== button.value);

        localStorage.setItem(`Answers${questionIndex}`, JSON.stringify(selectedQuestions));

        updateNextButtonState(questionIndex);

    } else {
        button.classList.add("selected-button");
        selectedQuestions.push(button.value);

        localStorage.setItem(`Answers${questionIndex}`, JSON.stringify(selectedQuestions));

        updateNextButtonState(questionIndex);

    }

    return selectedQuestions;
}