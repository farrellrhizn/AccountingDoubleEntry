import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import Subtitle from '../../../components/Typography/Subtitle';

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function DoughnutChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart size doesn't stretch
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = [
    'Electronics',
    'Home Appliances',
    'Beauty',
    'Furniture',
    'Watches',
    'Apparel',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: '# of Income',
        data: [219, 122, 82, 51, 30, 13],
        backgroundColor: [
          'rgba(74, 0, 255, 0.8)', // Color 1 with transparency 0.8
          'rgba(74, 0, 255, 0.6)', // Color 2 with transparency 0.6
          'rgba(74, 0, 255, 0.4)', // Color 3 with transparency 0.4
          'rgba(74, 0, 255, 0.3)', // Color 4 with transparency 0.3
          'rgba(74, 0, 255, 0.2)', // Color 5 with transparency 0.2
          'rgba(74, 0, 255, 0.1)', // Color 6 with transparency 0.1
        ],
      },
    ],
  };

  return (
    <TitleCard title={"Income by Category"} subtitle={<Subtitle>As of 24th June 2022</Subtitle>}>
      <div className="w-full flex justify-center">
        {/* Set the width and height of the chart container */}
        <div className="relative" style={{ width: '350px', height: '350px' }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </TitleCard>
  );
}

export default DoughnutChart;
