import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import icon from "../../assets/images/hospitalimg.png";
import thumnicon from "../../assets/images/thumb-icon.png";
import Calendar from '../Calendar/Calendar';
import { format } from 'date-fns/format';
import { useState } from 'react';

const HospitalCard = ({details, availableSlots, handleBookingModal, booking = false}) => {

   const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 }}}>
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{xs: 1, md: 4}}
            flexWrap={"wrap"}
        >
            <Box
                component="img"
                src={icon}
                width={{ xs: 64, md: 130}}
                height="auto"
                sx={{ flexShrink: 0, alignSelf: "start"}}
            />
            <Box flex={1}>
                <Typography component="h3" fontWeight={600} color="#1B3C74" fontSize={{ xs: 18, md: 20}} mb={1} textTransform="capitalize" lineHeight={1}>
                    {details["Hospital Name"].toLowerCase()}
                </Typography>
                <Typography color="#414146" textTransform="capitalize" fontSize={14} fontWeight={700}>
                    {`${details["City"].toLowerCase()}, ${details["State"]}`}
                </Typography>
                <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
                    <Typography  fontWeight={800} color="#02A401" textTransform="capitalize" >Free </Typography>
                    <Typography sx={{ textDecoration: "line-through", color: "#787887"}}> ₹500</Typography>
                    <Typography>Consultation fee at clinic</Typography>
                </Stack>
                <Divider sx={{mb: 2, borderStyle: "dashed"}} />
                <Stack
                    direction="row"
                    alignItems="center"
                    bgcolor="#01A400"
                    py="4px"
                    px={1}
                    borderRadius={1}
                    width="fit-content"
                    spacing="4px"
                >
                    <Box
                        component={"img"}
                        src={thumnicon}
                        width={{ xs: 16, md: 20}}
                        height={{ xs: 16, md: 20}}
                    />
                    <Typography
                        fontWeight={700}
                        fontSize={{ xs: 14, md: 16}}
                        color="#fff"
                        sx={{ opacity: 0.5 }}
                    >
                        {details["Hospital overall rating"] == "Not Available" ? 0 : details["Hospital overall rating"]}
                    </Typography>
                </Stack>
            </Box>

            <Stack justifyContent={booking ? "flex-start" : "flex-end"} minWidth="23%">
                {!booking && (
                    <>
                        <Typography
                            textAlign="center"
                            color='#01A400'
                            fontSize={14}
                            fontWeight={600}
                            mb={1}                           
                        >
                            Available Today
                        </Typography>
                        <Button 
                            variant="contained"
                            disableElevation
                            onClick={() => setShowCalendar((prev) => !prev)}
                        >
                            {!showCalendar ? "Book FREE Center Visit" : "Hide Booking Calendar"}
                        </Button>
                    </>
                )}

                {booking && (
                    <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0}}>
                        <Chip label={details.bookingTime} variant='outlined' color="primary" sx={{ borderRadius: 1, fontSize: 14}} />
                        <Chip 
                            label={format(new Date(details.bookingDate), "dd-MM-yyyy")} 
                            variant='outlined' 
                            color="success" 
                            sx={{ borderRadius: 1, fontSize: 14}} />
                    </Stack>
                )}
            </Stack>
        </Stack>

        {showCalendar && (
            <Calendar
                details={details}
                availableSlots={availableSlots}
                handleBookingModal={handleBookingModal}
            />
        )}
    </Box>
  )
}

export default HospitalCard
