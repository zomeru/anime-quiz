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

  const showNextButton =
    !gameOver &&
    !loading &&
    userAnswers.length === questionNumber + 1 &&
    questionNumber !== TOTAL_QUESTIONS;

  return (
    <div>
      <h1>Anime Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className='score'>Score:</p> : null}
      {loading ? <p>Loading Question...</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          callback={checkAnswer}
        />
      )}
      {showNextButton ? (
        <button className='next' onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
