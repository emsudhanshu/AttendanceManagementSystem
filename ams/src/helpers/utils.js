export const isAlphanumeric = (str) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
}

export const uniqueIdGenerator = () => {
    const date = new Date();
    const uniqueId = date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        date.getDate().toString().padStart(2, '0') +
        date.getHours().toString().padStart(2, '0') +
        date.getMinutes().toString().padStart(2, '0') +
        date.getSeconds().toString().padStart(2, '0') +
        date.getMilliseconds().toString().padStart(3, '0');
    return uniqueId;
}

export const getFormattedDate = () => {
  const today = new Date();
  const day = today.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return `${day}${month}${year}`;
}