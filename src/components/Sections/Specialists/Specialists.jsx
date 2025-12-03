import { Box, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SpecialistCard from "./SpecialistCard";
import img1 from "../../../assets/images/drimg1.png"
import img2 from "../../../assets/images/drimg2.png"
import img3 from "../../../assets/images/drimg3.png"
import img4 from "../../../assets/images/drimg4.png"

const Specialists = () => {

  const specialist_data = [
    {img: img1, title: 'Dr. Lesley Hull', designation: 'Neurologist'},
    {img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics'},
    {img: img2, title: 'Dr. BhattaMishra', designation: 'Medicine'},
    {img: img4, title: 'Dr. Anne Lmmao', designation: 'Medicine'},
    {img: img1, title: 'Dr. Lesley Hull', designation: 'Neurologist'},
    {img: img4, title: 'Dr. Anne Lmmao', designation: 'Medicine'},
    {img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics'},
    {img: img2, title: 'Dr. BhattaMishra', designation: 'Medicine'},

  ]
  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" fontSize={60} fontWeight={550} textAlign="center" mb={3} px={2} color="#1B3C74">
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        className="specialist-swiper"
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {specialist_data.map((item, index) => (
            <SwiperSlide key={index}>
              <SpecialistCard 
              img={item.img}
              title={item.title}
              designation={item.designation}
               />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  )
}

export default Specialists
