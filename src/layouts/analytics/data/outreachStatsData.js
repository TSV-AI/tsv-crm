const outreachStatsData = {
  outreachStats: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: {
      label: "Messages Sent",
      data: [280, 320, 310, 340, 390, 420],
    },
  },
  responseRates: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Response Rate",
        data: [20, 22, 24, 26, 25, 24.5],
        color: "success",
      },
    ],
  },
};

export default outreachStatsData;
