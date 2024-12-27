import quizBase from "./quizBase.js";

export function quizSelector() {
    const quizSelector = document.querySelectorAll("#startQuiz");
    
    quizSelector.forEach(button => {
        button.addEventListener("click", () => {
            quizBase(button);
        })
    });
}