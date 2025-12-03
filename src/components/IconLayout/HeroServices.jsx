import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
} from "@mui/material";
import doctorIcon from "../../assets/images/Doctor.png";
import ambulanceIcon from "../../assets/images/Ambulance.png";
import labIcon from "../../assets/images/Drugstore.png";
import hospitalIcon from "../../assets/images/Hospital.png";
import capsuleIcon from "../../assets/images/Capsule.png";
import SearchIcon from "@mui/icons-material/Search";
import IconCard from "../IconLayout/IconCard";
import { useMemo } from "react";
import InputAdornment from "@mui/material/InputAdornment";

const HeroServices = () => {
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: ambulanceIcon, title: "Ambulance" },
      { img: hospitalIcon, title: "Hospital", active: true },
      { img: labIcon, title: "Lab" },
      { img: capsuleIcon, title: "Capsule" },
    ],
    []
  );

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center" mb={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: -12, mb: 1 }}
            gap={25}
          >
            <TextField
              placeholder="State"
              variant="outlined"
              sx={{ width: "260px", borderRadius: "30%", bgcolor: "#FAFBFE" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#8A8A8A" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              placeholder="City"
              variant="outlined"
              sx={{ width: "260px", bgcolor: "#FAFBFE" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#8A8A8A" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              startIcon={<SearchIcon />} 
              sx={{
                px: 3,
                py: 2,
                fontSize: "15px",
                borderRadius: "12px",
                bgcolor: "#2AA7FF",
              }}
            >
              Search
            </Button>
          </Box>
        </Grid>

        <Typography
          component="h4"
          fontSize={22}
          color="#102851"
          fontWeight={600}
          textAlign="center"
          mb={4}
        >
          You may be looking for
        </Typography>

        <Grid container justifyContent="center" columnSpacing={2}>
          {Services.map((service, index) => (
            <Grid item key={index} xs={6} md={2.4}>
              <IconCard
                img={service.img}
                title={service.title}
                active={service.active || false}
                bgColor="#FAFBFE"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroServices;
