export default function quizHeader(question, questionIndex) {

    questionIndex++;

    const questionsSubTitle = document.querySelector("#subTitle");
    questionsSubTitle.textContent = question.category;


    const questionsDoneSelector = document.querySelector("#questionsDone");
    questionsDoneSelector.textContent = questionIndex;

    const questionSelector = document.querySelector("#question");
    const textConverter = question.question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&rdquo;/g, "'");

    questionSelector.textContent = textConverter;



}