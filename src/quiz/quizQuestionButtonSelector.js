import { updateNextButtonState } from "./quizNextButton.js";

export function resetSelectedQuestions() {
    selectedQuestion = null;
}

let selectedQuestion = null;

export default function quizButtonValidation(button, questionIndex) {
    // Deselect previously selected button if it exists
    const previouslySelectedButton = document.querySelector('.selected-button');
    if (previouslySelectedButton) {
        previouslySelectedButton.classList.remove('selected-button');
    }

    // If clicking the same button, deselect it
    if (selectedQuestion === button.value) {
        selectedQuestion = null;
        localStorage.setItem(`Answers${questionIndex}`, JSON.stringify(selectedQuestion));
        updateNextButtonState(questionIndex);
        return selectedQuestion;
    }

    // Select new button
    button.classList.add('selected-button');
    selectedQuestion = button.value;
    localStorage.setItem(`Answers${questionIndex}`, JSON.stringify(selectedQuestion));
    updateNextButtonState(questionIndex);

    return selectedQuestion;
}