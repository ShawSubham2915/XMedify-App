import { Chip, Divider, Stack, Typography } from "@mui/material"


const TimeSlotPicker = ({ availableSlots, selectDate, details, handleBookingModal}) => {

    const CustomChip = (props) => {
        return (
            <Chip 
            label={props.label}
            color="primary"
            variant="outlined"
            sx={{
                borderRadius: "5px",
                fontSize: { xs: 10, md: 14 },
                cursor: "pointer",
                "&:nth-of-type(1)": {
                    ml: 0,
                },
                mr: {xs: 1, md: 3},
                mt: {xs: 1, md: 0},
            }}
            onClick={props.handleClick}
        />
        )
    };

    const handleClick = (slot) => {
        handleBookingModal({ ...details, bookingDate: selectDate, bookingTime: slot });
    }


  return (
    <Stack
        pt={3}
        spacing={{ xs: 2, md: 3}}
        divider={<Divider orientation="horizontal" flexItem />}
        // flexWrap="wrap"
    >
        {availableSlots.morning.length > 0 && (
                <Stack direction="row" alignItems="center" px={{ xs: 0, md: 6}} flexWrap="wrap" >
                    <Typography width={{xs : 1, md: "15%"}} fontSize={{ xs: 14, md: 16}} mb={1}>
                        Morning
                    </Typography>
                    {availableSlots.morning.map((slot, index) => (
                        <CustomChip key={index} label={slot} handleClick={() => handleClick(slot)} />
                    ))}
                </Stack>
        )}
        {availableSlots.afternoon.length > 0 && (
                <Stack direction="row" alignItems="center" px={{ xs: 0, md: 6}} flexWrap="wrap" >
                    <Typography width={{xs : 1, md: "15%"}} fontSize={{ xs: 14, md: 16}} mb={1}>
                        Afternoon
                    </Typography>
                    {availableSlots.afternoon.map((slot, index) => (
                        <CustomChip key={index} label={slot} handleClick={() => handleClick(slot)} />
                    ))}
                </Stack>
        )}
        {availableSlots.evening.length > 0 && (
                <Stack direction="row" alignItems="center" px={{ xs: 0, md: 6}} flexWrap="wrap" >
                    <Typography width={{xs : 1, md: "15%"}} fontSize={{ xs: 14, md: 16}} mb={1}>
                        Evening
                    </Typography>
                    {availableSlots.evening.map((slot, index) => (
                        <CustomChip key={index} label={slot} handleClick={() => handleClick(slot)} />
                    ))}
                </Stack>
        )}
    </Stack>
  )
}

export default TimeSlotPicker
