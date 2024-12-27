export function updateNextButtonState(questionIndex) {
    const nextQuizSelector = document.querySelector("#nextQuiz");
    const answers = JSON.parse(localStorage.getItem(`Answers${questionIndex}`) || "[]");
    
    if (answers.length > 0) {
        nextQuizSelector.disabled = false;
        nextQuizSelector.classList.add("active");
    } else {
        nextQuizSelector.disabled = true;
        nextQuizSelector.classList.remove("active");
    }
}