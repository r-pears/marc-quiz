export default function resultBackToHome() {
  // move selectors outside of click event
  const backToHomeSelector = document.querySelector("#resultsBackToHome");
  const removeQuizWrapper = document.querySelector(".quiz-wrapper");
  const quizResultsSelector = document.querySelector("#quizResults");
  const resultAnwsersSelector = document.querySelector("#quizResultAnwsers");
  const quizPopupSelector = document.querySelector("#quizPopup");

  backToHomeSelector.addEventListener("click", () => {
    resultAnwsersSelector.classList.add("display-none");
    quizResultsSelector.classList.add("display-none");
    quizPopupSelector.classList.add("display-none");
    removeQuizWrapper.classList.remove("display-none");
    // innerText is better for security
    quizPopupSelector.innerText = "";
    localStorage.clear();
  });
}
