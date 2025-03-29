export default function resultsBackToHome() {
  const resultPopup = document.querySelector("#quizResults");
  const takeNewQuizButton = document.querySelector("#takeNewQuiz");
  const quizPopup = document.querySelector("#quizPopup");
  const backToHomeButton = document.querySelector("#backToHome");
  const quizWrapper = document.querySelector(".quiz-wrapper");

  // Helper function to reset quiz state
  const resetQuizState = () => {
    if (resultPopup) resultPopup.classList.add("display-none");
    if (quizPopup) {
      quizPopup.classList.add("display-none");
      quizPopup.innerText = "";
    }
    if (quizWrapper) quizWrapper.classList.remove("display-none");
    localStorage.clear();
  };

  // Attach event listeners if elements exist
  if (takeNewQuizButton) {
    takeNewQuizButton.addEventListener("click", resetQuizState);
  }

  if (backToHomeButton) {
    backToHomeButton.addEventListener("click", resetQuizState);
  }
}
