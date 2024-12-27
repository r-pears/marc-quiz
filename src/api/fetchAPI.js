import fallBackLocalStorageQuestions from "./fallBackLocalStorageQuestions.js";
import localStorageQuestions from "./localStorageQuestions.js";

export async function fetchAPI(quizID) {

    const apiURL = `https://opentdb.com/api.php?amount=10&category=${quizID}&difficulty=hard&type=multiple`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const quizData = await response.json();

       await localStorageQuestions(quizData);

    } catch (error) {
        console.error(error.message);

        await fallBackLocalStorageQuestions(quizID);
    }
}