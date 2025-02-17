function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

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

        const decodedQuestion = decodeHTML(currentQuestion.question);
        const decodedUserAnswer = decodeHTML(userAnswer);
        const decodedCorrectAnswer = decodeHTML(correctAnswer);

        rows.description.textContent = `${index + 1}. ${decodedQuestion}`;
        rows.yourAnswer.textContent = `Your Answer: ${decodedUserAnswer}`;
        rows.correctAnswer.textContent = `Correct Answer: ${decodedCorrectAnswer}`;
        rows.score.textContent = `Score: ${calculateScore(correctAnswer, userAnswer)}`;

        tableElement.appendChild(clone);
    }
}

function calculateScore(correctAnswer, userAnswer) {
    return correctAnswer === userAnswer ? 1 : 0;
}