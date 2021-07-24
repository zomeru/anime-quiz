import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

interface AppProps {}

const TOTAL_QUESTIONS = 10;

const App: React.FC<AppProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNubmber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGamerOver] = useState(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>Anime Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Question...</p>
      <QuestionCard
        questionNumber={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={nextQuestion}></button>
    </div>
  );
};

export default App;
