import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../../assets/images/our-families-banner.png";

const OurFamilies = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", px: 2, py: 4, backgroundColor: "#E8F2FF" }}>
 
  <Box sx={{ maxWidth: 500 }}>
    <Typography sx={{ color: "#2A90E8", fontSize: "0.9rem", fontWeight: 600, mb: 1 }}>
      CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
    </Typography>

    <Typography sx={{ fontSize: "3rem", fontWeight: 700, mb:1, color: "#1B3C74" }}>
      Our Families
    </Typography>

    <Typography sx={{ fontSize: "1rem", opacity: 0.8, lineHeight: 2.3 }}>
      We will work with you to develop individualised care plans, including management 
      of chronic diseases. If we cannot assist, we can provide referrals or advice about
      the type of practitioner you require. We treat all enquiries sensitively and in the
      strictest confidence.
    </Typography>
  </Box>

  
  <Box
    component="img"
    src={banner}  
    alt="families banner"
    sx={{
      width: "600px",
      height: "auto",
      ml: 4,
    }}/>
</Box>

  );
};

export default OurFamilies;
