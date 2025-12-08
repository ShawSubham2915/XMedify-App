import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Box, Container, Stack, Typography } from "@mui/material";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import icon from "../assets/images/verified.png";
import cta from "../assets/images/cta.png";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";

const availableSlots = {
  morning: ["11:30 AM"],
  afternoon: ["12:00 PM", "12:30 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
  evening: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingStatus, setShowBookingStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //for search param
  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        const data = response.data;
        setHospitals(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setIsLoading(false);
      }
    };
    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  //for local search
  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  //showbooking Modal
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Box 
      sx={{
        background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
        width: "100%",
        pl: 0,
      }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg,  #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container maxWidth="lg" 
              sx={{
                background: "#fff",
                p: 3,
                borderRadius: 4,
                transform: "translateY(50px)",
                mb: "50px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}>
            <SearchHospital />
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ pt:8, pb: 10, px: { xs: 0, md: 4 }}}>
            {hospitals.length > 0 && (
              <Box sx={{ mb: 3}}>
                <Typography
                  component="h1"
                  fontSize={24}
                  lineHeight={1.1}
                  mb={2}
                  fontWeight={500}
                >
                  {`${hospitals.length} medical centers available in`}
                  <span style={{ textTransform: "capitalize"}}>
                    {city.toLocaleLowerCase()}
                  </span>
                </Typography>
                <Stack direction="row" flexWrap="wrap" spacing={2}>
                  <img src={icon} height={24} width={24} alt="icon" />
                  <Typography color="#787887" lineHeight={1.4}>
                    Book appointments with minimum wait-time & verified doctor details
                  </Typography>
                </Stack>
              </Box>
            )}

            <Stack alignItems="flex-start" direction={{ md: "row"}}>
              <Stack
                mb={{ xs: 4, md: 0 }}
                spacing={3}
                width={{ xs: 1, md: "calc(100% - 384px)"}}
                mr="24px"
              >
                {hospitals.length > 0 && (
                  hospitals.map((hospital) => (
                    <HospitalCard
                      key={hospital["Hospital Name"]}
                      details={hospital}
                      availableSlots={availableSlots}
                      handleBookingModal={handleBookingModal}
                    />
                  ))
                )}
                
                {isLoading && (
                    <Typography variant="h3" bgcolor="#fff" p={2} borderRadius={2}>
                      Loading...
                    </Typography>
                )}

                {!state && (
                  <Typography variant="h3" bgcolor="#fff" p={2} borderRadius={2}>
                    Please select a state and city 
                  </Typography>
                )}

              </Stack>

              <img src={cta} width={360} height="auto" alt="banner" />
            </Stack>
        </Container>
      
        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          // showBookingStatus={showBookingStatus}
          showSuccessDetails={setShowBookingStatus}
        />
        
        <AutohideSnackbar
          open={showBookingStatus}
          setOpen={setShowBookingStatus}
          message="Booking successful"
        />

      </Box>
    </>
  )
};

export default Search;
