import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Saldo (em M)',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(078, 134, 171)',
      borderColor: 'rgba(078, 134, 171, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const saldoTempo = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default saldoTempo;