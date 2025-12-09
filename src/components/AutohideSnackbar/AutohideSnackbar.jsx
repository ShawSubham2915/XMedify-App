import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AutohideSnackbar = ({ open, setOpen, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AutohideSnackbar;
