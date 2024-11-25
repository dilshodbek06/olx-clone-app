export function formatDate(date: Date): string {
  const now = new Date();
  const targetDate = new Date(date);

  // Strip time components from the dates
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfTarget = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
  );

  // Calculate the difference in days
  const daysDifference = Math.round(
    (startOfToday.getTime() - startOfTarget.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Format the time string
  const timeString = targetDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (daysDifference === 0) {
    return `today at ${timeString}`;
  } else if (daysDifference === 1) {
    return `yesterday at ${timeString}`;
  } else {
    return `${daysDifference} days ago`;
  }
}

const formatter = new Intl.NumberFormat("uz-UZ", {
  style: "currency",
  currency: "UZS",
});

export const formatPrice = (price: number): string => formatter.format(price);

export const getImage = (id: string): string => {
  return `https://ucarecdn.com/${id}/`;
};
