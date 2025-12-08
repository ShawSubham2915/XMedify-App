import { add, startOfDay } from "date-fns";

export const generateDateRange = (count = 7) => {
  const startDate = startOfDay(new Date());
  return Array.from({ length: count }, (_, i) => add(startDate, { days: i }));
};
