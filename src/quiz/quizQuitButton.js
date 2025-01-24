export default function quizQuitButton() {

    const quitButtonSelector = document.querySelector("#quitQuiz");

    quitButtonSelector.addEventListener("click", () => {

        const quizSelector = document.querySelector("#quizPopup");
        quizSelector.classList.add("display-none");
        quizSelector.innerHTML = "";

        const removeQuizWrapper = document.querySelector(".quiz-wrapper");
        removeQuizWrapper.classList.remove("display-none");

        localStorage.clear();
    });
}