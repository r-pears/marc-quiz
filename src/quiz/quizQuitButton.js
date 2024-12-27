export default function quizQuitButton() {

    const quitButtonSelector = document.querySelector("#quitQuiz");

    quitButtonSelector.addEventListener("click", () => {

        const quizSelector = document.querySelector("#quizPopup");
        quizSelector.classList.add("display-none");
        quizSelector.innerHTML = "";

        localStorage.clear();
    });
}