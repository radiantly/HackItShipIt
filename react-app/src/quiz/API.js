import { shuffleArray } from './utils'


export const fetchQuizQuestions = async (type) => {
    const endpoint = `https://pirate-quiz.herokuapp.com/v1/questions?type=${type}`
    const data1 = await (await fetch(endpoint)).json();  //will await the fetch itself and then await while we convert it to json! Hence the repeated await keywords
    return data1.data.map((question) => (
        {
            ...question,
            answers : shuffleArray([...question.options])
        }
    ))
}
