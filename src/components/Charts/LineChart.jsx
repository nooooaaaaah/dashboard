import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Temperature & Humidity',
    },
  },
};

const labels = ['10:30', '10:40', '10:50', '11:00', '11:10', '11:20', '11:30'];

class LineChart extends React.Component {
  constructor() {
    super(...arguments)
    this.data = {
      labels,
      datasets: [
        {
          label: 'Temp',
          data: labels.map(() =>
            faker.datatype.number({ min: 60, max: 95 })
          ),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'RH',
          data: labels.map(() =>
            faker.datatype.number({ min: 30, max: 100 })
          ),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  }

  render() {
    return <Line options={options} data={this.data} className='m-14'/>;
  }
}
export default LineChart;
