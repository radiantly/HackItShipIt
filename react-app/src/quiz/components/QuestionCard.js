import React from 'react';


const QuestionCard  = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={!!userAnswer} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)
   

export default QuestionCard;