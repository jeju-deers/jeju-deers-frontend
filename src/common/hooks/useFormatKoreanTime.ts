const useFormatKoreanTime = (utcDate: string) => {
  const koreanDate = new Date(utcDate);

  const year = koreanDate.getFullYear();
  const month = (koreanDate.getMonth() + 1).toString().padStart(2, "0");
  const day = koreanDate.getDate().toString().padStart(2, "0");
  const hours = koreanDate.getHours().toString().padStart(2, "0");
  const minutes = koreanDate.getMinutes().toString().padStart(2, "0");

  return { year, month, day, hours, minutes };
};

export default useFormatKoreanTime;
