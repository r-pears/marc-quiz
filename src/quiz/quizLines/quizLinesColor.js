export default function quizLinesColor(currentQuestionIndex) {
    const linesSelector = document.querySelectorAll(".lines div");

    linesSelector.forEach((line, index) => {
        if (index < currentQuestionIndex) {
            line.classList.add("active");
        } else {
            line.classList.remove("active");
        }

        if (index === currentQuestionIndex) {
            line.classList.add("current");
        } else {
            line.classList.remove("current");
        }
    });
}
