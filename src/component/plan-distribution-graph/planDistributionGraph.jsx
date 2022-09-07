import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export const data = {
  labels: ["Today", "This Week", "This Month"],
  datasets: [
    {
      label: "# of Votes",
      data: [100, 300, 1500],
      backgroundColor: [
        "rgba(115, 103, 240, 100)",
        "rgb(13 83 252)",
        "rgba(253, 172, 52, 100)",
      ],
      borderWidth: 0,
    },
  ],
};

export default function PlanDistributionGraph() {
  return (
    <div className="card" style={{ position: "relative", minHeight: "400px" }}>
      <h3 className="header-3 mb-3">Earning</h3>
      <div style={{ position: "relative", height: "300px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
