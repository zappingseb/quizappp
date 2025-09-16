import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const BookingOverview = ({ bookingCode, flights }) => {
  // helper to compute arrival time

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: "auto", mb: 3, borderRadius: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lh_logo_STANDARD_blue_rgb.png/960px-Lh_logo_STANDARD_blue_rgb.png"
          alt="Lufthansa Logo"
          style={{ maxWidth: "200px", height: "auto" }}
        />
      </Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Booking Overview
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Booking Code: <strong>{bookingCode}</strong>
      </Typography>

      {flights.map((f, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Flight {idx + 1}: {f.flightNumber}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>
              <strong>Departure:</strong> {f.departureDate} – {f.departureTime} ({f.departureIATA})
            </Typography>
            <Typography>
              <strong>Arrival:</strong> {f.departureDate} – {f.arrivalTime} ({f.arrivalIATA})
            </Typography>
            <Typography>
              <strong>Route:</strong> {f.departureCity} → {f.arrivalCity}
            </Typography>
          </Box>
          {idx < flights.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Paper>
  );
};

export default BookingOverview;
