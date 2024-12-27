export default async function fallBackLocalStorageQuestions(quizID) {

    if (quizID === '27') {
        try {
            const response = await fetch('./assets/questions/animals.json');
            const questionSelector = await response.json();
            localStorage.setItem('questions', JSON.stringify(questionSelector));
        } catch (error) {
            console.error("Error loading questions:", error);
        }
    } else if (quizID === '21') {
        try {
            const response = await fetch('./assets/questions/sport.json');
            const questionSelector = await response.json();
            localStorage.setItem('questions', JSON.stringify(questionSelector));
        } catch (error) {
            console.error("Error loading questions:", error);
        }
    } else if (quizID === '20') {
        try {
            const response = await fetch('./assets/questions/mythology.json');
            const questionSelector = await response.json();
            localStorage.setItem('questions', JSON.stringify(questionSelector));
        } catch (error) {
            console.error("Error loading questions:", error);
        }
    } else if (quizID === '9') {
        try {
            const response = await fetch('./assets/questions/general.json');
            const questionSelector = await response.json();
            localStorage.setItem('questions', JSON.stringify(questionSelector));
        } catch (error) {
            console.error("Error loading questions:", error);
        }
    }
}