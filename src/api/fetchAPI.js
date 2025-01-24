import localStorageQuestions from "./localStorageQuestions.js";

export async function fetchAPI(quizID) {
    const apiURL = `https://opentdb.com/api.php?amount=10&category=${quizID}&difficulty=hard&type=multiple`;

    // Show a loading 
    const loadingButton = document.createElement("button");
    loadingButton.classList.add("LoadingButton");
    loadingButton.textContent = "Loading questions, please wait...";
    loadingButton.disabled = true;
    document.body.appendChild(loadingButton);

    // Disable scrolling while loading
    document.body.classList.add("no-scroll");

    let success = false;

    while (!success) {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const quizData = await response.json();
            await localStorageQuestions(quizData);
            success = true;

            const removeQuizWrapper = document.querySelector(".quiz-wrapper");
            removeQuizWrapper.classList.add("display-none");

        } catch (error) {
            console.error(error.message);
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }

    // Remove the loading
    loadingButton.remove();
    document.body.classList.remove("no-scroll");
}
