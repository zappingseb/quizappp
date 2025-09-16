import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Markdown from "markdown-to-jsx";
import { useTheme } from "@mui/material";

const QuestionCard = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const theme = useTheme();

  const handleOptionClick = (option, index) => {
    setSelectedOption({ ...option, index });
    setShowFeedback(true);

    if (option.isRightAnswer) {
      // Auto-advance after showing feedback
      setTimeout(() => {
        onAnswer(option);
        setSelectedOption(null);
        setShowFeedback(false);
      }, 1500);
    }
  };

  const getButtonStyles = (option, index) => {
    if (!showFeedback) {
      return {
        variant: "outlined",
        color: "secondary",
        sx: {
          p: 2,
          textAlign: "left",
          justifyContent: "flex-start",
          borderRadius: "10px",
          background: "#FFF",
          boxShadow: "5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)",
          border: "none",
          textTransform: "none",
          fontSize: "1rem",
          minHeight: "56px",
          "&:hover": {
            background: "#FE909D",
            color: "white",
            transform: "translateY(-2px)",
            boxShadow: "5px 11px 12px 0 rgba(0, 0, 0, 0.1)",
            border: 0,
          },
          transition: "all 0.2s ease-in-out",
        },
      };
    }

    // Show feedback styles
    const isSelected = selectedOption && selectedOption.index === index;
    const isCorrect = option.isRightAnswer;

    if (isSelected) {
      return {
        variant: "contained",
        color: isCorrect ? "success" : "error",
        sx: {
          p: 2,
          textAlign: "left",
          justifyContent: "space-between",
          borderRadius: "10px",
          background: isCorrect ? theme.palette.success.main : "#FE909D",
          boxShadow: "5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)",
          border: "none",
          textTransform: "none",
          fontSize: "1rem",
          minHeight: "56px",
          color: "white",
          "&:hover": {
            background: "#FE909D",
          },
        },
      };
    } else {
      return {
        variant: "outlined",
        color: "secondary",
        sx: {
          p: 2,
          textAlign: "left",
          justifyContent: "flex-start",
          borderRadius: "10px",
          background: "#FFF",
          boxShadow: "5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)",
          border: "none",
          textTransform: "none",
          fontSize: "1rem",
          minHeight: "56px",
          opacity: 0.6,
        },
      };
    }
  };

  const renderButtonContent = (option, index) => {
    if (!showFeedback) {
      return (
        <Typography variant="body1" component="span">
          {option.text}
        </Typography>
      );
    }

    const isSelected = selectedOption && selectedOption.index === index;
    const isCorrect = option.isRightAnswer;
    const showIcon = isSelected || isCorrect;
    const correctSelected = isSelected === isCorrect;

    return (
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Typography variant="body1" component="span">
          {option.text}
        </Typography>
        {showIcon && (
          <Box sx={{ ml: 2, display: "flex" }}>
            {correctSelected ? (
              <CheckCircleIcon sx={{ color: "inherit" }} />
            ) : (
              isSelected && <CancelIcon sx={{ color: "inherit" }} />
            )}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 3,
        minHeight: { xs: "auto", sm: "400px" },
      }}
    >
      {/* Question Image */}
      {question.image && (
        <Card sx={{ mb: 3, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="200"
            image={question.image}
            alt="Question illustration"
            sx={{ objectFit: "cover" }}
          />
        </Card>
      )}

      {/* Question Text */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            lineHeight: 1.4,
            mb: 2,
          }}
        >
          <Markdown
            options={{
              overrides: {
                strong: {
                  component: "span",
                  props: { style: { color: theme.palette.primary.main, fontWeight: "bold" } },
                },
                em: { component: "span", props: { style: { fontStyle: "italic", color: "#666" } } },
              },
            }}
          >
            {question.question}
          </Markdown>
        </Typography>
      </Box>

      {/* Answer Options */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {question.options.map((option, index) => {
          const buttonStyles = getButtonStyles(option, index);
          return (
            <Button
              key={index}
              variant={buttonStyles.variant}
              color={buttonStyles.color}
              onClick={() =>
                !(showFeedback && option.isCorrect && selectedOption === option) && handleOptionClick(option, index)
              }
              disabled={showFeedback && option.isCorrect && selectedOption === option}
              sx={buttonStyles.sx}
            >
              {renderButtonContent(option, index)}
            </Button>
          );
        })}
      </Box>

      {/* Feedback Message */}
      {showFeedback && selectedOption && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography
            variant="body1"
            color={selectedOption.isRightAnswer ? "success.main" : "error.main"}
            sx={{ fontWeight: 600 }}
          >
            {selectedOption.isRightAnswer ? "✅ Richtig!" : "❌ Falsch"}
          </Typography>
        </Box>
      )}

      {/* Question Counter */}
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="caption" color="text.secondary">
          Question {questionNumber} of {totalQuestions}
        </Typography>
      </Box>
    </Paper>
  );
};

export default QuestionCard;
