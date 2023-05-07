
export const getDate = (timestamp) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 
    'November', 'December'
  ];

  const d = timestamp.split('-');

  const year = d[0];
  const month = months[parseInt(d[1]) - 1];
  const date = d[2].slice(0, 2);

  return `${month} ${date}, ${year}`;
}
