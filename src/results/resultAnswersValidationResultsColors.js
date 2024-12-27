export default function resultAnswersValidationResultsColors(totalPoints) {
    const amountCorrectElement = document.getElementById('amountCorrect');
    const resultDescription = document.getElementById('resultDescription');
    const resultTitle = document.getElementById('resultTitle');
    const resultImage = document.getElementById('resultImage');
    if (amountCorrectElement) {
        amountCorrectElement.textContent = totalPoints;

        if (totalPoints > 12) {
            amountCorrectElement.style.color = '#4CAF50'; // Green
            resultTitle.textContent = "Congratulations!";
            resultDescription.textContent = "You are a absolute beast!";

        } else if (totalPoints >= 8) {
            amountCorrectElement.style.color = '#FFC107'; // Yellow
            resultDescription.textContent = "You know more than 60% of the people doing this quiz, well done!";
            resultTitle.textContent = "Congratulations!";

        } else {
            amountCorrectElement.style.color = '#F44336'; // Red
            resultDescription.textContent = "You need a bit more practice.";
            resultTitle.textContent = "Thats a pity!";
            resultImage.src = "./assets/thumbs-down.svg";
        }
    }
}