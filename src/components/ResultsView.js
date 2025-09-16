import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useTheme } from "@mui/material/styles";
import BookingOverview from "./BookingOverview";
import { Link } from "@mui/material";

const ResultsView = ({ phrases, answers, score, totalQuestions, onRestart, title }) => {
  const theme = useTheme();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return "success";
    if (percentage >= 60) return "warning";
    return "error";
  };

  const getScoreMessage = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad! 📈";
    return "Keep practicing! 💪";
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center", gap: 2 }}>
      {/* Header with Score */}
      {answers.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette[getScoreColor()].light} 0%, ${
              theme.palette[getScoreColor()].main
            } 100%)`,
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            <EmojiEventsIcon sx={{ fontSize: 40, mr: 1 }} />
            <Typography variant="h4" component="h1">
              Quiz Complete!
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ mb: 2 }}>
            {getScoreMessage()}
          </Typography>

        </Paper>
      )}
      <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 3
          }}
          >
            <Typography variant="h6">Dein Preis ist eine Reise nach Belgrad</Typography>
            <Typography>vom 10-12.10. - Oma & Opa und Oma & Opa und deine Chefs sind informiert und eingeplant.</Typography>
            <Typography variant="h5">Happy Birthday!
            </Typography>
          </Paper>

      {/* Phrase Collection - Tag Cloud */}
      <BookingOverview
        bookingCode="95QWNK"
        flightDurationMinutes={100} // 1h40 = 100 minutes
        flights={[
          {
            departureDate: "10.10.2025",
            departureTime: "14:55",
            flightNumber: "LH1736",
            departureIATA: "MUC",
            arrivalIATA: "BEG",
            departureCity: "Munich",
            arrivalCity: "Belgrade",
          },
          {
            departureDate: "12.10.2025",
            departureTime: "13:00",
            flightNumber: "LH1735",
            departureIATA: "BEG",
            arrivalIATA: "MUC",
            departureCity: "Belgrade",
            arrivalCity: "Munich",
          },
        ]}
      />
      <Box>
        <Paper elevation={3} sx={{ mb: 3, p:2, display: 'flex', flexDirection: 'column' }}>
          <Link sx={{display: 'flex', flexDirection: 'column'}} target="new" href="https://www.airbnb.de/rooms/29823897?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvbkNvbmZpcm1hdGlvblRlbXBsYXRl&euid=9f55bdee-e789-3cdd-23e1-de840d849edf&source_impression_id=p3_1758018458_P3otkhVibS2EUIxr">
          
            <img
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/330px-Airbnb_Logo_B%C3%A9lo.svg.png'}
              alt="Lufthansa Logo"
              style={{ maxWidth: "200px", height: "auto" }}
            />
            <img
              src={'/flat.jpg'}
              alt="Lufthansa Logo"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </Link>
          <Typography variant="h6" >
            Luxus-Wohnung 2 im Stadtzentrum von Belgrad
          </Typography>
          <Typography sx={{textAlign: 'start'}}>
            Luxuriöses Apartment im Stadtzentrum für 2 Personen. Es verfügt über eine kleine Küche , ein eigenes Badezimmer mit Dusche und Whirlpool und einen gemeinsamen Balkon, den Gäste aller 5 Wohnungen, die sich auf der gleichen Etage befinden, nutzen können. 
          </Typography>
        </Paper>
      </Box>
      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<RestartAltIcon />}
          onClick={onRestart}
          size="large"
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Quiz erneut starten
        </Button>
      </Box>
    </Box>
  );
};

export default ResultsView;
