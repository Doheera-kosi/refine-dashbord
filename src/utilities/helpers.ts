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



interface DealData {
  timeText: string;
  value: number;
}

// export const mapDealsData = (data: any[]): DealData[] => {
//   if (!data) return [];

//   return data.map((deal: any) => {
//     return {
//       timeText: deal.timeText, // Assuming this is the time label for each data point
//       value: deal.value // Assuming this is the numeric value for each data point
//     };
//   });
// };

export const mapDealsData = (data: any[]): DealData[] => {
  if (!data) return [];

  return data.map((deal: any) => {
    return {
      timeText: deal.title, // Assuming 'title' is the property containing the time label
      value: deal.dealsAggregate.length // Assuming 'dealsAggregate' contains an array of deals
    };
  });
};