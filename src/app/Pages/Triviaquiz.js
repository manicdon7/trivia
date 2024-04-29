"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '@/app/Pages/Questions';
import Connect from '../Components/Connect';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function TriviaQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const selectedQuestions = shuffleArray(questions).slice(0, 10);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < selectedQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      localStorage.setItem('quizScore', score.toString());
      navigate('/result');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Connect />
      <h1 className="text-3xl font-bold mb-4">Trivia Quiz</h1>
      {currentQuestionIndex < selectedQuestions.length ? (
        <div className="animate__animated animate__fadeIn">
          <p className="text-lg">{selectedQuestions[currentQuestionIndex].question}</p>
          <div className="mt-4 space-y-2">
            {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 mx-4 rounded transition duration-300"
                onClick={() => handleAnswer(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn">
          <p className="text-lg">Quiz completed! Your score is {score}.</p>
        </div>
      )}
    </div>
  );
}
