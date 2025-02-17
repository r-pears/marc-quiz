import quizButtonValidation from "./quizQuestionButtonSelector.js";

export default function quizButtons(question, questionIndex) {
    const questionsCorrect = question.correct_answer;
    const questionsIncorrect = question.incorrect_answers;
    
    questionsIncorrect.push(questionsCorrect);
    
    const shuffledAnswers = questionsIncorrect.sort(() => Math.random() - 0.5);
    
    const decodeHTML = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    
    shuffledAnswers.forEach(answer => {
        const questionButtonsSelector = document.querySelector("#questionButtons");
        
        const button = document.createElement("button");
        button.textContent = decodeHTML(answer);
        button.value = answer; 
        button.onclick = () => quizButtonValidation(button, questionIndex);
        
        questionButtonsSelector.appendChild(button);
    });
}