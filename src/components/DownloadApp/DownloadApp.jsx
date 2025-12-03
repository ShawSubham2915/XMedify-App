import React from "react";
import { Box, Typography, Button, TextField, InputAdornment } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import mobilePreview from "../../assets/images/download-preview.png";
import googlePlay from "../../assets/images/google_play.png";
import appStore from "../../assets/images/apple_store.png";

const DownloadApp = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #E8F3FF 0%, #F7FBFF 100%)",
        px: { xs: 3, md: 12 },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4
      }}>
      
      <Box component="img"
            src={mobilePreview}
            alt="app-preview"
            sx={{
              display: "block",
              width: { xs: "50%", md: "50%" },
            }}/>      
      <Box sx={{ maxWidth: 500 }}>
        <Typography sx={{ fontSize: "3.5rem", fontWeight: 600, mb: 1, color: "#0c288fff" }}>
          Download the <br/><span style={{color: "#25A9FF" }}>Medify </span>App
        </Typography>

        <Typography sx={{ fontSize: "1rem", opacity: 0.8, mb: 3 }}>
          Get the link to download the app
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Enter phone number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
              sx: { background: "white", borderRadius: "8px" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#25A9FF",              
              borderRadius: "8px",
              fontWeight: 400,
              width: "15rem",
              textTransform: "none",
              whiteSpace: "nowrap",
            }}>
            Send SMS
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2,  }}>
          <img src= {googlePlay} alt="Google Play" width={200} height={70}/>
          <img src={appStore} alt="App Store" width={200} height={70} />
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
