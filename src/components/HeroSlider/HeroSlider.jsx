import { Box, Stack, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import img from "../../assets/images/hero-wp.png"


const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center" pt={2}>
          <Box>
            <Typography variant="h3" fontWeight={500} fontSize={{ xs: 20, md: 30 }} fontFamily="Poppins">Skip the travel! Find Online</Typography>
            <Typography variant="h1" fontWeight={700} fontSize={{ xs: 40, md: 60}} fontFamily="Poppins" mb={1}>Medical <span style={{ color: "#2AA7FF" }}>Centers</span></Typography>
            <Typography color="#5C6169" fontSize={{ md: 20}} mb={3}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Link to='/search'>
              <Button variant="contained" size="large" disableElevation sx={{bgcolor: "#2AA7FF", borderRadius: 2}}>Find Centers</Button>
            </Link>
          </Box>
          <Box 
            component="img" src={img} alt="hero" width={{ xs:1, md: '50%'}} sx={{ width: { xs: "100%", md: "50%" } }}/>
        </Stack>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
