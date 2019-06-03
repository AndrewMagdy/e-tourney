export const formatDate = dateString => {
  const withoutZone = dateString.replace(" ", "T").split("Z")[0];
  const date = new Date(withoutZone);
  return date.toLocaleString("en-gb");
};
