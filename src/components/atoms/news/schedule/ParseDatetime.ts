export const parseDatetime = (datetime: string | undefined) => {
  if (typeof datetime !== "string") {
    return { year: 2023, month: 1, day: 1, hour: 9 };
  }
  const match = datetime.match(/(\d{4})\/(\d{2})\/(\d{2}) - (\d+):00 (AM|PM)/); // YYYY/MM/DD - H:00 AM/PM
  if (!match) return { year: 2023, month: 1, day: 1, hour: 9 };
  let [_, year, month, day, hour, period] = match;
  let numericHour = parseInt(hour, 10);
  if (period === "PM" && numericHour !== 12) numericHour += 12;
  if (period === "AM" && numericHour === 12) numericHour = 0;
  return {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
    hour: numericHour,
  };
};
