import React, { useState } from "react";
import { Box, Modal, Typography, TextField, Button, Stack } from "@mui/material";
import { format } from "date-fns";


const BookingModal = ({ open, setOpen, bookingDetails, showSuccessDetails }) => {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();

    const bookings = localStorage.getItem("bookings") || "[]";

    const oldBookings = JSON.parse(bookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, { ...bookingDetails, bookingEmail: email }])
    );
    showSuccessDetails(true);
    setOpen(false);
    setEmail("");
  };

  const triggerEvent = () => {

    window.dataLayer = window.dataLayer || [];

    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "first_visit",
        eventDate: new Date().toISOString(),
      });
    }

    triggerFirstVisitEvent();
  };

    const formDate = (day) => {
      if(day) {
        const date = new Date(day);
        return format(date, "E, d LLL");
      } else {
        return null;
      }
    };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box 
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#fff",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight={600} mb={2}>
          Confirm Booking
        </Typography>

        <Typography fontSize={14} mb={3}>
          <Box>
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" sx={{ fontWeight: 600 }}>
            {`${bookingDetails.bookingTime} on ${formDate(bookingDetails.bookingDate)}`}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              fullWidth
              label="Enter your email"
              variant="outlined"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Stack direction="row" spacing={1}>
              <Button variant="contained" type="submit" size="large" disableElevation>
                Confirm
              </Button>
              <Button variant="outlined" size="large" disableElevation onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Stack>     
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
