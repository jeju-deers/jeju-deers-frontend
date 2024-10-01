const useFormatKoreanTime = (utcDate: string) => {
  const date = new Date(utcDate);
  const koreanTime = new Date(date.getTime() + 9 * 60 * 1000);

  const year = koreanTime.getFullYear();
  const month = koreanTime.getMonth() + 1;
  const day = koreanTime.getDate();
  const hours = koreanTime.getHours();
  const minutes = koreanTime.getMinutes().toString().padStart(2, "0");

  return { year, month, day, hours, minutes };
};

export default useFormatKoreanTime;
