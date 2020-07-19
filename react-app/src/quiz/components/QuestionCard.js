import React from 'react';


const QuestionCard  = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    <div>
        <p style={{
            fontSize: 20,
            fontFamily: 'Chelsea Market',
          }}
          className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p style={{
            fontSize: 30,
            fontFamily: 'Chelsea Market',
          }}
          dangerouslySetInnerHTML={{ __html: question}} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={!!userAnswer} onClick={callback} value={answer} style={{
                        background: 'rgba(47,96,235,0.9)',
                        fontFamily: 'Chelsea Market',
                        fontSize: 20,
                        width: '100%',
                        padding: 12,
                        marginTop: 10,
                        color: 'white',
                        borderRadius: 14,
                        border: 'none'
                      }}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)
   

export default QuestionCard;