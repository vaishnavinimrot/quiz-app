import React from 'react'

const Result = ({userAnswer,question,resetQuiz=()=>{}}) => {
    const correctAnswer = userAnswer.filter((answer)=> answer).length;
  return (
    <div className="result">
        <h2>Result</h2>
        <p>Congratulation you answer {correctAnswer} out of {question.length}</p>
        <button className="rebut"onClick={resetQuiz}> Reset</button>
        </div>
  )
}

export default Result