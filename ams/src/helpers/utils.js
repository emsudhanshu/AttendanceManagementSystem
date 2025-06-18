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