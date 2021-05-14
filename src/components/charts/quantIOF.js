import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Resgate com IOF', 'Resgate sem IOF'],
  datasets: [
    {
      label: '% de Resgates',
      data: [60,40],
      backgroundColor: [
        'rgba(52, 194, 76, 0.2)',
        'rgba(196, 55, 55, 0.2)',
      ],
      borderColor: [
        'rgba(52, 194, 76, 1)',
        'rgba(196, 55, 55, 1)',
      ],
      borderWidth: 1,
    },
  ],
  options: {
    responsive: false,
  }
};

const quantIOF = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default quantIOF;