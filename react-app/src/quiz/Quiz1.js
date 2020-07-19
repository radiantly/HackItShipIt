import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';



const App = ({setVisible1}) => {
  const [loading, setLoading ] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [scoreStyle, setStyle] = useState({
    background: 'rgba(0,0,0,0.9)',
    fontFamily: 'Chelsea Market',
    fontSize: 30,
    padding: 12,
    color: 'white',
    borderRadius: 14,
    border: 'none'
    });
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


  const startTrivia = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);

  }

  const checkAnswer = (e) => {
      if(!gameOver){
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        if(correct) setScore(prev => prev + 1);
        if(correct){
            setStyle({
            background: 'rgba(0,140,0,0.9)',
            fontFamily: 'Chelsea Market',
            fontSize: 30,
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          })
        }else{
            setStyle({
            background: 'rgba(140,0,0,0.9)',
            fontFamily: 'Chelsea Market',
            fontSize: 30,
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
            })
        }
        // Save answer in the userAnswers array
        const answerObject = {
          question: questions[number].question,
          answer, //es6 syntax
          correct,
          correctAnswer : questions[number].correct_answer
        }
        setUserAnswers(prev => [...prev, answerObject])
      }
  }

  const nextQuestion = () => {
      //MOve onto the next question, if it is not the last question
      const nextQuestion = number + 1;

      if(nextQuestion === TOTAL_QUESTIONS) {
        setStyle({
            background: 'rgba(0,0,0,0.9)',
            fontFamily: 'Chelsea Market',
            fontSize: 30,
            padding: 12,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          })
        setGameOver(true);

      } else{
        setNumber(nextQuestion);
      }
  }


  return (

    <div className="App">
     {gameOver && (<h1 style={{fontSize: 20,
        fontFamily: 'Chelsea Market',}}>Ahoy, matey! You Ready?</h1>)} 
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? 
      (
      <button className="start" onClick={startTrivia}
      style={{
        background: 'rgba(0,140,0,0.9)',
        fontFamily: 'Chelsea Market',
        fontSize: 20,
        width: '100%',
        padding: 12,
        color: 'white',
        borderRadius: 14,
        border: 'none'
      }}>
        Start
      </button>
      ) 
      : null}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? 
        (
        <button className="close" onClick={()=>setVisible1(false)}
        style={{
          background: 'rgba(140,0,0,0.9)',
          fontFamily: 'Chelsea Market',
          fontSize: 20,
          width: '100%',
          padding: 12,
          color: 'white',
          borderRadius: 14,
          border: 'none'
        }}>
          Close
        </button>
        ) 
        : null}
      {!gameOver ? (<p style={scoreStyle}
      className="score">
      Score: {score} </p>) : null}
      {loading ? <p style={{
        fontSize: 20,
        fontFamily: 'Chelsea Market',
      }}
      > Loading Questions ... </p> : null}
      {!loading && !gameOver && (
        <QuestionCard 
        questionNr={number + 1}
        totalQuestions={10}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button style={{
            background: 'rgba(80,80,80,0.9)',
            fontFamily: 'Chelsea Market',
            fontSize: 20,
            width: '100%',
            padding: 12,
            marginTop: 10,
            color: 'white',
            borderRadius: 14,
            border: 'none'
          }}
          className="next"  onClick={nextQuestion}>Next Question</button>
      )
      : null
      }
    </div>

  );
}

export default App;
