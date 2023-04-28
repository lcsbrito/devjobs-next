export default function timeElapsed(date) {
  const today = new Date();
  const postedDate = new Date(date);
  const timeDiff = today - postedDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  if (years > 0) {
    return `${years}y ago`;
  }
  if (months > 0) {
    return `${months}m ago`;
  }
  if (days > 0) {
    return `${days}d ago`;
  }
  if (hours > 0) {
    return `${hours}h ago`;
  }
  if (hours < 1) {
    return "Now";
  }
}
