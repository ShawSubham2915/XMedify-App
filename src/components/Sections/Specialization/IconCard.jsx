// IconCard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const IconCard = ({ img, title }) => {
  return (
    <Box
      sx={{
        width: "260px",               
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: "14px",
        boxShadow: "0 14px 30px rgba(30,60,120,0.08)",
        padding: { xs: "24px 16px", md: "36px 24px" },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          objectFit: "contain",
          mb: 2.5,
        }}
      />

      <Typography
        sx={{
          color: "#6D7B93",
          fontWeight: 700,
          fontSize: { xs: "15px", md: "18px" },
        }} >
        {title}
      </Typography>
    </Box>
  );
};

export default IconCard;
