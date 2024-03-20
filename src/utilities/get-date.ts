export const getDate = (startDate: any, endDate: any): string => {
  // Check if startDate and endDate are not Date objects
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    throw new Error('startDate and endDate must be instances of Date');
  }

  const start = startDate.toLocaleDateString();
  const end = endDate.toLocaleDateString();

  // Check if start and end dates are the same
  if (start === end) {
    return start;
  } else {
    // Format as "start - end" if different
    return `${start} - ${end}`;
  }
};
