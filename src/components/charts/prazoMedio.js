import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Prazo Médio (em dias)',
      data: [24, 30, 45, 32, 20, 30],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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

const prazoMedio = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default prazoMedio;