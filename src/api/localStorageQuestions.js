export default async function localStorageQuestions(quizData) {

    const questionSelector = quizData.results;

    localStorage.setItem('questions', JSON.stringify(questionSelector));

}