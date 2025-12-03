// Specializations.jsx
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import img1 from "../../../assets/images/Drugstore.png";
import img2 from "../../../assets/images/Stethoscope.png";
import img3 from "../../../assets/images/Heart Rate.png";
import img4 from "../../../assets/images/Heart Rate Monitor.png";
import img5 from "../../../assets/images/Blood Sample.png";
import img6 from "../../../assets/images/Immune.png";
import img7 from "../../../assets/images/X-Ray.png";
import IconCard from "./IconCard";

const Specializations = () => {
  const data = [
    { title: "Dentistry", img: img1 },
    { title: "Primary Care", img: img2 },
    { title: "Cardiology", img: img3 },
    { title: "MRI Resonance", img: img4 },
    { title: "Blood Test", img: img5 },
    { title: "Piscologist", img: img6 },
    { title: "Laboratory", img: img1 },
    { title: "X-Ray", img: img7 },
  ];

  return (
    <Box py={8} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#1B3C74", mb: 6 }}
        >
          Find By Specialisation
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <IconCard img={item.img} title={item.title} />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          sx={{
            mt: 6,
            px: 6,
            py: 1.6,
            borderRadius: "10px",
            fontWeight: 500,
            backgroundColor: "#2AA7FF",
            "&:hover": { backgroundColor: "#2C7EF8" },
          }}>
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specializations;
