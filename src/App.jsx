
import  {useState} from "react";
import "./App.css"
import question from "./contest/question.json"
import Question from "./components/question.jsx";
import Result from "./components/Result.jsx";


function App(){
  const [currentQuestion, setCurrentQuestion]= useState(0);
  const [userAnswer, setUserAnswer]= useState([]);

    const handleNextQuestion=(isCorrect)=>{

      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer([...userAnswer,isCorrect])

    }
    const resetQuiz=()=>{
      setCurrentQuestion(0)
      setUserAnswer([])
    }

  return ( 
    <div className="App"> 
      <h1>WORLD QUIZ</h1>
      {
      currentQuestion<question.length &&(
      <Question
       question={question[currentQuestion]}
      onAnswerClick={handleNextQuestion}
      />
      )}

      {currentQuestion===question.length &&
      <Result 
      userAnswer={userAnswer}
      question={question}
        resetQuiz={resetQuiz}
/>}
    </div>
  )
}

export default App