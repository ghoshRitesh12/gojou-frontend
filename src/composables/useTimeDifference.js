
export const getTimeDifference = (timestamp) => {
  timestamp = new Date(timestamp).getTime()
  const now = new Date().getTime();
  const diff = now - timestamp;

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  if (diff < minute) {
    return 'just now';
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (diff < week) {
    const days = Math.floor(diff / day);
    return `${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
}
