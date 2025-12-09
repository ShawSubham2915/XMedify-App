import {
  Box,
  Grid,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import doctorIcon from "../../assets/images/Doctor.png";
import ambulanceIcon from "../../assets/images/Ambulance.png";
import labIcon from "../../assets/images/Drugstore.png";
import hospitalIcon from "../../assets/images/Hospital.png";
import capsuleIcon from "../../assets/images/Capsule.png";
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
      <Container maxWidth="lg">

        <Typography
          component="h4"
          fontSize={22}
          color="#102851"
          fontWeight={600}
          textAlign="center"
          mb={{ xs: 2, md: 4 }}
        >
          You may be looking for
        </Typography>

        <Grid container justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          rowSpacing={{ xs: 2, sm: 3 }}>
          {Services.map((service, index) => (
            <Grid item key={index} xs={6} sm={4} md={2.4}>
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
