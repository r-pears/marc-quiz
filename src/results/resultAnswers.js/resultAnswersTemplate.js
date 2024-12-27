export function displayQuestionResult(tableElement, index, correctAnswer, userAnswer) {
    const questionsLocalStorage = JSON.parse(localStorage.getItem("questions"));

    const currentQuestion = questionsLocalStorage[index];

    if ("content" in document.createElement("template")) {
        const template = document.querySelector("#quizResultAnwsersTemplate");
        const clone = template.content.cloneNode(true);

        const rows = {
            description: clone.querySelector("#resultDescriptionRow"),
            yourAnswer: clone.querySelector("#resultYourAnswerRow"),
            correctAnswer: clone.querySelector("#resultCorrectAnswerRow"),
            score: clone.querySelector("#resultScoreRow")
        };

        const textConverterDescription = currentQuestion.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");

        rows.description.textContent = `${index + 1}. ${textConverterDescription}`;

        rows.yourAnswer.textContent = `Your Answer: ${userAnswer}`;
        rows.correctAnswer.textContent = `Correct Answer: ${correctAnswer}`;
        rows.score.textContent = `Score: ${calculateScore(correctAnswer, userAnswer)}`;

        tableElement.appendChild(clone);
    }
}

function calculateScore(correctAnswer, userAnswer) {
    return correctAnswer === userAnswer ? 2 : 0;
}