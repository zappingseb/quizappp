import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useTheme } from "@mui/material";

const AnswerBox = ({ currentQuestion, questionsData }) => {
  const [open, setOpen] = useState(currentQuestion == 1);
  const theme = useTheme();

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, maxWidth: "80%" }}>
      <Paper elevation={1} sx={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent:'center', width: 48}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{p:1,m:0}}
          onClick={() => setOpen(!open)}
        >
          {open ? <PlaylistRemoveIcon fontSize="32px" /> : <PlaylistAddCheckIcon fontSize="32px" />}
        </IconButton>
      </Paper>
      {open && (
        <Paper elevation={2} sx={{ p: 2, mt: 1, ml: 2 }}>
          {questionsData.questions
            .filter((question, index) => index < currentQuestion)
            .map((question) => {
              return question.options
                .filter((x) => x.isRightAnswer)
                .map((x) => (
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      mb: 2,
                      textAlign: "center",
                      borderRadius: 2,
                    }}
                  >
                    {x.text}
                  </Paper>
                ));
            })}
          {currentQuestion === 1 && (
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mb: 2,
                textAlign: "left",
                borderRadius: 2,
                backgroundColor: theme.palette.primary.light,
              }}
            >
              Hier kannst du alle richtigen Antworten sehen, das kann dir später helfen
            </Paper>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default AnswerBox;
