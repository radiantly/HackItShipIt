import { shuffleArray } from './utils'


export const fetchQuizQuestions = async (amount) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=medium&type=multiple`
    const data = await (await fetch(endpoint)).json();  //will await the fetch itself and then await while we convert it to json! Hence the repeated await keywords
    return data.results.map((question) => (
        {
            ...question,
            answers : shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}
