import resultAnswersPage from "./resultAnswers.js/resultAnswersPage.js";
import resultAnswersValidationResultsColors from "./resultAnswersValidationResultsColors.js";

export default function resultsAnswersValidation(currentQuestion) {
    const questions = JSON.parse(localStorage.getItem('questions') || "[]");
    const correctAnswers = [];
    const allUserAnswers = [];
    let totalPoints = 0;

    for (let i = 0; i < questions.length; i++) {
        const answers = JSON.parse(localStorage.getItem(`Answers${i}`) || "[]");
        console.log(answers, "LocalHostAwnsers");
        allUserAnswers.push(Array.isArray(answers) ? answers[0] : answers);
    }
    
    questions.forEach(question => {
        correctAnswers.push(question.correct_answer);
    });
    
    correctAnswers.forEach((correctAnswer, index) => {
        const userAnswer = allUserAnswers[index];
        if (userAnswer === correctAnswer) {
            totalPoints += 1;
        }
    });
    
    resultAnswersValidationResultsColors(totalPoints);

    resultAnswersPage(correctAnswers, allUserAnswers);
}
