"use client"
// pages/quiz.js
import React, { useState } from "react";
import styles from './styles.css';

const Quiz = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "What is the largest planet in our solar system?",
      answerOptions: [
        { answerText: "Earth", isCorrect: false },
        { answerText: "Jupiter", isCorrect: true },
        { answerText: "Mars", isCorrect: false },
        { answerText: "Saturn", isCorrect: false },
      ],
    },
    {
      questionText: "What is the chemical symbol for water?",
      answerOptions: [
        { answerText: "O2", isCorrect: false },
        { answerText: "H2O", isCorrect: true },
        { answerText: "CO2", isCorrect: false },
        { answerText: "HO", isCorrect: false },
      ],
    },
    {
      questionText: "Who wrote 'To Kill a Mockingbird'?",
      answerOptions: [
        { answerText: "Harper Lee", isCorrect: true },
        { answerText: "Mark Twain", isCorrect: false },
        { answerText: "Ernest Hemingway", isCorrect: false },
        { answerText: "F. Scott Fitzgerald", isCorrect: false },
      ],
    },
    {
      questionText: "What is the hardest natural substance on Earth?",
      answerOptions: [
        { answerText: "Gold", isCorrect: false },
        { answerText: "Iron", isCorrect: false },
        { answerText: "Diamond", isCorrect: true },
        { answerText: "Silver", isCorrect: false },
      ],
    },
    {
      questionText: "Who painted the Mona Lisa?",
      answerOptions: [
        { answerText: "Vincent van Gogh", isCorrect: false },
        { answerText: "Pablo Picasso", isCorrect: false },
        { answerText: "Leonardo da Vinci", isCorrect: true },
        { answerText: "Claude Monet", isCorrect: false },
      ],
    },
    {
      questionText: "What is the smallest country in the world?",
      answerOptions: [
        { answerText: "Monaco", isCorrect: false },
        { answerText: "Vatican City", isCorrect: true },
        { answerText: "San Marino", isCorrect: false },
        { answerText: "Liechtenstein", isCorrect: false },
      ],
    },
    {
      questionText: "What is the speed of light?",
      answerOptions: [
        { answerText: "300,000 km/s", isCorrect: true },
        { answerText: "150,000 km/s", isCorrect: false },
        { answerText: "450,000 km/s", isCorrect: false },
        { answerText: "600,000 km/s", isCorrect: false },
      ],
    },
    {
      questionText: "Who developed the theory of relativity?",
      answerOptions: [
        { answerText: "Isaac Newton", isCorrect: false },
        { answerText: "Albert Einstein", isCorrect: true },
        { answerText: "Galileo Galilei", isCorrect: false },
        { answerText: "Nikola Tesla", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div class="quiz-container" className={styles.quizContainer}>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
