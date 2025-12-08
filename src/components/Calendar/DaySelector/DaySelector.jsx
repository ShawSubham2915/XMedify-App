import React, { useRef, useMemo } from "react";
import { startOfDay, add, isSameDay, format } from "date-fns";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SlideNextButton, SlidePrevButton } from "./SlideButton";
import {generateDateRange}  from "../utils/generatDateRange.js";

const DaySelector = ({ selectDate, setSelectedDate, totalSlots }) => {
  const today = startOfDay(new Date());

  const dateItems = useMemo(() => generateDateRange(7), []);

  const swiperRef = useRef(null);

  const customDateFormat = (day) => {
    if (isSameDay(day, today)) return "Today";
    if (isSameDay(day, add(today, { days: 1 }))) return "Tomorrow";
    return format(day, "E, d LLL"); 
  };

  return (
    <Stack pt={2} position="relative">
    
      <Divider sx={{ mb: 3 }} />

      <Box display="flex" justifyContent="center" mb={1}>
        <Box width={100} height={6} borderRadius={3} bgcolor="#00A400" />
      </Box>

      <Box position="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={16}
          loop={false}
          className="date-swiper"
          breakpoints={{
            0: { slidesPerView: 1.6 },
            480: { slidesPerView: 2.5 },
            767: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {dateItems.map((day, idx) => {
            const active = isSameDay(day, selectDate);
            return (
              <SwiperSlide key={idx}>
                <Stack
                  textAlign="center"
                  onClick={() => setSelectedDate(day)}
                  sx={{
                    cursor: "pointer",
                    py: { xs: 1, md: 1.5 },
                    userSelect: "none",
                  }}
                >
                  <Typography
                    fontWeight={active ? 700 : 500}
                    fontSize={{ xs: 12, md: 16 }}
                    color={active ? "#0B2A66" : "text.primary"}
                  >
                    {customDateFormat(day)}
                  </Typography>

                  <Typography color="#01A400" fontSize={{ xs: 9, md: 12 }} mt={0.5}>
                    {`${totalSlots} Slots Available`}
                  </Typography>

                  <Box
                    height={{ xs: "3px", md: "4px" }}
                    width={{ xs: "48px", md: "64px" }}
                    borderRadius="6px"
                    mt={1}
                    mx="auto"
                    bgcolor={active ? "#2AA7FF" : "transparent"}
                    transition="background-color 200ms ease"
                  />
                </Stack>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SlidePrevButton swiperRef={swiperRef} />
        <SlideNextButton swiperRef={swiperRef} />
      </Box>
    </Stack>
  );
};

export default DaySelector;
