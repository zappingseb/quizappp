import React, { useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProgressIndicator from "./ProgressIndicator";
import QuestionCard from "./QuestionCard";
import ResultsView from "./ResultsView";
import AnswerBox from "./AnswerBox";
import PasswordBox from "./PasswordBox";

const Quiz = ({ questionsData, phrases, onPhraseAdd, onReset }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = useCallback(
    (selectedOption) => {
      const isCorrect = selectedOption.isRightAnswer;
      const newAnswer = {
        questionId: questionsData.questions[currentQuestion].id,
        selectedOption,
        isCorrect,
      };

      setAnswers((prev) => [...prev, newAnswer]);
      onPhraseAdd(selectedOption.phrase);

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      if (currentQuestion < questionsData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    },
    [currentQuestion, questionsData.questions, onPhraseAdd]
  );

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setIsComplete(false);
    setAnswers([]);
    setScore(0);
    onReset();
  }, [onReset]);

  const handleCorrectPassword = useCallback(() => {
    setIsComplete(true)
  }, [])

  if (isComplete) {
    return (
      <ResultsView
        phrases={phrases}
        answers={answers}
        score={score}
        totalQuestions={questionsData.questions.length}
        onRestart={handleRestart}
        title={questionsData.title}
      />
    );
  }

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {/* Header */}
      { currentQuestion === 0 &&
        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            {questionsData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {questionsData.description}
          </Typography>
        </Paper>
      }

      {/* Progress Indicator */}
      <Box sx={{ mb: 3 }}>
        <ProgressIndicator currentStep={currentQuestion + 1} totalSteps={questionsData.questions.length} />
      </Box>

      {/* Current Question */}
      <QuestionCard
        question={questionsData.questions[currentQuestion]}
        onAnswer={handleAnswer}
        questionNumber={currentQuestion + 1}
        totalQuestions={questionsData.questions.length}
      />

      {currentQuestion > 0 && <AnswerBox currentQuestion={currentQuestion} questionsData={questionsData} />}

      {currentQuestion === 0 && <PasswordBox onCorrect={handleCorrectPassword} pwd={questionsData.password} />}
    </Box>
  );
};

export default Quiz;
