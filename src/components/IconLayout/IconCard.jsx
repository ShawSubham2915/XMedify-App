import { Box, Typography } from "@mui/material";

const IconCard = ({ img, title, active }) => {
  return (
    <Box
      sx={{
        width: "180px",               
        height: "100%",
        cursor: "pointer",
        borderRadius: "16px",
        p: 3,
        textAlign: "center",
        bgcolor: active ? "#E8F2FF" : "#FAFBFE",
        border: active ? "2px solid #2cadf8ff" : "2px solid transparent",
        transition: "all 0.3s ease",
        "&:hover": {
          border: "2px solid #2cadf8ff",
          bgcolor: "#E8F2FF"
        },
      }}
    >
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{ width: 60, height: 60, mb: 2 }}
      />

      <Typography
        fontSize={18}
        fontWeight={500}
        color={active ? "#2C7EF8" : "#6B7280"} >
        {title}
      </Typography>
    </Box>
  );
};

export default IconCard;
