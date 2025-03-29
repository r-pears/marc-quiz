import resultAnswersPage from "./resultAnswers.js/resultAnswersPage.js";
import resultAnswersValidationResultsColors from "./resultAnswersValidationResultsColors.js";

export default function resultsAnswersValidation() {
  // retrieve questions from localStorage or default to an empty array
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");
  const correctAnswers = questions.map((question) => question.correct_answer);
  const userAnswers = [];
  let totalPoints = 0;

  // collect user answers from localStorage
  questions.forEach((_, index) => {
    const storedAnswers = JSON.parse(
      localStorage.getItem(`Answers${index}`) || "[]"
    );
    console.log(storedAnswers, "LocalHostAnswers");
    userAnswers.push(
      Array.isArray(storedAnswers) ? storedAnswers[0] : storedAnswers
    );
  });

  // calculate total points by comparing user answers with correct answers
  correctAnswers.forEach((correctAnswer, index) => {
    if (userAnswers[index] === correctAnswer) {
      totalPoints++;
    }
  });

  // update results colors based on total points
  resultAnswersValidationResultsColors(totalPoints);

  // render the results page with correct and user answers
  resultAnswersPage(correctAnswers, userAnswers);
}
