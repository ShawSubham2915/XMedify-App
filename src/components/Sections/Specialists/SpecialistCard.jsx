import { Box, Typography } from "@mui/material";

const SpecialistCard = ({ img, title, designation }) => {
  return (
    <Box
      sx={{
        width: 320,         
        height: 480,
        textAlign: "center",
        pb: 1,
        mx: "auto",
      }}
    >
     
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: "100%",
          height: 350,       
          objectFit: "cover",
          borderRadius: "180px 180px 0 0",
          overflow: "hidden",
        }}
      />


      <Typography
        variant="h6"
        fontWeight="400"
        sx={{ mt: 2, fontSize: "18px", color: "#1B3C74" }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "15px", color: "#2AA7FF", mt: 0.5 }}
      >
        {designation}
      </Typography>
    </Box>
  );
};

export default SpecialistCard;
