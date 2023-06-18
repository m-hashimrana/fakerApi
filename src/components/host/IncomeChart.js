import React from 'react';
// import { CategoryScale, Chart, LinearScale } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const IncomeChart = () => {
	return (
		<div style={{ maxWidth: '650px' }}>
			<Bar
				data={{
					// Name of the variables on x-axies for each bar
					labels: ['1st bar', '2nd bar', '3rd bar', '4th bar'],
					datasets: [
						{
							// Label for bars
							label: 'total count/value',
							// Data or value of your each variable
							data: [1552, 1319, 613, 1400],
							// Color of each bar
							backgroundColor: ['aqua', 'green', 'red', 'yellow'],
							// Border color of each bar
							borderColor: ['aqua', 'green', 'red', 'yellow'],
							borderWidth: 0.5,
						},
					],
				}}
				// Height of graph
				height={400}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									// The y-axis value will start from zero
									beginAtZero: true,
								},
							},
						],
					},
					legend: {
						labels: {
							fontSize: 15,
						},
					},
				}}
			/>
		</div>
	);
};

export default IncomeChart;
