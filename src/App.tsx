import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';

interface AppProps {}

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC<AppProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNubmber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGamerOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGamerOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNubmber(0);
    setLoading(false);
  };

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
      {/* <QuestionCard
        questionNumber={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
