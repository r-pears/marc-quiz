export default function quizLinesCreator(questions) {
    console.log(questions);
    const linesSelector = document.querySelector(".lines");

    questions.forEach(question => {
        const lineElement = document.createElement("div");
        linesSelector.appendChild(lineElement);
    });

}