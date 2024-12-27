import { fetchAPI } from "../api/fetchAPI.js";
import { quizPopupShow } from "./quizPopupShow.js";

export default async function quizBase(button) {
    const quizID = button.dataset.categoryid;

    try {
        // Wait for the api to finish before doing the other function
        await fetchAPI(quizID);

        quizPopupShow();
    } catch (error) {
        console.error("Error starting quiz:", error);

        quizPopupShow();
    }

}

