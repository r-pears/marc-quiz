export default function quizLinesColor(currentQuestionIndex) {
  const linesSelector = document.querySelectorAll(".lines div");

  linesSelector.forEach((line, index) => {
    // refactor for readability
    const isActive = index < currentQuestionIndex;
    const isCurrent = index === currentQuestionIndex;

    line.classList.toggle("active", isActive);
    line.classList.toggle("current", isCurrent);
  });
}
