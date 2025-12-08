// SlideButton.jsx
import React from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export const SlidePrevButton = ({ swiperRef }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: -24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
        display: { xs: "none", md: "block" },
      }}
    >
      <IconButton
        onClick={() => swiperRef.current?.slidePrev()}
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid #E0E0E4",
          bgcolor: "#fff",
          "&:hover": { bgcolor: "#EAF6FF" },
        }}
      >
        <ArrowBackIosNew sx={{ color: "#2AA7FF", fontSize: 18 }} />
      </IconButton>
    </Box>
  );
};

export const SlideNextButton = ({ swiperRef }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: -24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
        display: { xs: "none", md: "block" },
      }}
    >
      <IconButton
        onClick={() => swiperRef.current?.slideNext()}
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid #E0E0E4",
          bgcolor: "#fff",
          "&:hover": { bgcolor: "#EAF6FF" },
        }}
      >
        <ArrowForwardIos sx={{ color: "#2AA7FF", fontSize: 18 }} />
      </IconButton>
    </Box>
  );
};
