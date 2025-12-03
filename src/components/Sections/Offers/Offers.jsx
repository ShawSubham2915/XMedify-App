import { Box, Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/pagination";
import "./offer.css"
import offer1 from '../../../assets/images/offer1.png'
import offer2 from '../../../assets/images/offer2.png'

const Offers = () => {
  return (
    <Box py={6} px={4}>
      <Container maxWidth="xl">
        <Swiper
           slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            767: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Box component="img" src={offer1} alt="offer1" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" src={offer2} alt="offer2" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component="img" src={offer1} alt="offer1" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" src={offer2} alt="offer2" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component="img" src={offer1} alt="offer1" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" src={offer2} alt="offer2" sx={{ width: "100%", height: "auto" }} />
          </SwiperSlide>

        </Swiper>
      </Container>
    </Box>
  )
}

export default Offers
