export const ellipse = (string, length = 10, prefix = '') =>
  !string
    ? ''
    : string.length < length * 2 + 3
      ? string
      : `${string.startsWith(prefix) ? prefix : ''}${string
          .replace(prefix, '')
          .slice(0, length)}...${string.replace(prefix, '').slice(-length)}`;

export const timestampToDate = timestamp => {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};
