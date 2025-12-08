import { Box } from "@mui/material";
import { startOfDay } from './../../../node_modules/date-fns/fp/startOfDay';
import DaySelector from "./DaySelector/DaySelector";
import { useState } from "react";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

const Calendar = ({details, availableSlots, handleBookingModal}) => {
    const [selectDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots = 
            availableSlots.morning.length +
            availableSlots.afternoon.length +
            availableSlots.evening.length

  return (
    <Box>
        <DaySelector 
            selectDate={selectDate}
            setSelectedDate={setSelectedDate}
            totalSlots={totalSlots}
        />
        <TimeSlotPicker 
            availableSlots={availableSlots}
            selectDate={selectDate}
            details={details}
            handleBookingModal = {handleBookingModal}
        />
    </Box>
  )
}

export default Calendar
