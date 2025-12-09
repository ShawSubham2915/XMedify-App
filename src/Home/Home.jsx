import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import HeroServices from "../components/IconLayout/HeroServices";
import FAQs from "../components/Sections/FAQs/FAQs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Specialists from "../components/Sections/Specialists/Specialists";
import Specializations from "../components/Sections/Specialization/Specializations";
import Offers from "../components/Sections/Offers/Offers";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 6, lg: 12, xl: 20 } }}>
          <HeroSlider />

         <Stack
            width={{ xs: "100%", sm: "90%", md: "80%", lg: "75rem" }}
            p={{ xs: 2.5, sm: 4, md: 6, lg: 8 }}
            mt={{ xs: -3, sm: -4, md: -6, lg: -8, xl: -10 }}
            mx="auto"
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specializations />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </Box>
  );
};

export default Home;
