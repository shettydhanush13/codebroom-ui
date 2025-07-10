import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import './styles.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FileIssuesBarChart = ({ issues = [] }) => {
  const fileIssueCounts = issues
    .map(file => ({
      file: file.file.split('/')[file.file.split('/').length - 1],
      count: file.issues.length,
    }))
    .filter(f => f.count > 0);

  const data = {
    labels: fileIssueCounts.map(f => f.file),
    datasets: [
      {
        label: 'Issues',
        data: fileIssueCounts.map(f => f.count),
        backgroundColor: '#66ffff',
        color: '66ffff'
      },
    ],
  };

  return (
    <div className="fileIssue-chart" style={{ height: `${fileIssueCounts.length*35}px` }}>
      <h3>Issues per File</h3>
      <Bar
        data={data}
        options={{
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                color: '#66ffff',
                callback: function (value) {
                  const label = this.getLabelForValue(value);
                  // return label.length > 20 ? label.substring(0, 20) + '...' : label;
                  return label;
                },
                font: {
                  size: 14,
                },
              },
            },
            x: {
              ticks: {
                color: '#66ffff',
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default FileIssuesBarChart;
