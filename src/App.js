import React, { useState } from "react";

const questions = [
  {
    questionText: "What does IBM stand for?",
    answerOptions: [
      { answerText: "International Business Machines", isCorrect: true },
      { answerText: "Internet Business Management", isCorrect: false },
      { answerText: "Integrated Basic Machine", isCorrect: false },
      { answerText: "None of the above", isCorrect: false },
    ],
  },
  {
    questionText: "Which programming language is mainly used in IBM mainframes?",
    answerOptions: [
      { answerText: "COBOL", isCorrect: true },
      { answerText: "Python", isCorrect: false },
      { answerText: "JavaScript", isCorrect: false },
      { answerText: "Ruby", isCorrect: false },
    ],
  },
  {
    questionText: "IBM Watson is primarily known for?",
    answerOptions: [
      { answerText: "Artificial Intelligence", isCorrect: true },
      { answerText: "Cloud Storage", isCorrect: false },
      { answerText: "Operating Systems", isCorrect: false },
      { answerText: "Mobile Apps", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
    else setShowScore(true);
  };

  return (
    <div style={styles.app}>
      <h1>IBM Frontend Quiz App</h1>
      {showScore ? (
        <div style={styles.scoreSection}>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div style={styles.questionSection}>
            <div style={styles.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={styles.questionText}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div style={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                style={styles.button}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "8px",
    textAlign: "center",
  },
  questionSection: {
    marginBottom: "20px",
  },
  questionCount: {
    marginBottom: "10px",
    fontSize: "20px",
  },
  questionText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  answerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #333",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.3s",
  },
  scoreSection: {
    fontSize: "28px",
    fontWeight: "bold",
  },
};

export default App;
