import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
    }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Members',
            data: [10, 23, 70, 45, 23, 60, 23, 95, 45, 23, 50, 87],
            backgroundColor: 'rgb(13 83 252)',
            borderRadius: 20,
            barThickness: 12,
        },
    ],
};

export default function ActiveMemberGraph() {

    return (
        <div className='card pb-5' style={{ height: "400px" }}>
            <h3 className='header-3 mb-3'>Booking by Month</h3>
            <Bar options={options} data={data} />
        </div>
    )
}
