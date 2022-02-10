export const formattedDateStr = (isoDateStr) => {
  const jsDate = new Date(isoDateStr);
  const dayTwoDigit = ("0" + jsDate.getDate()).slice(-2);
  const monthTwoDigit = ("0" + (jsDate.getMonth() + 1)).slice(-2);
  return `${dayTwoDigit}/${monthTwoDigit}/${jsDate.getFullYear()}`;
};
