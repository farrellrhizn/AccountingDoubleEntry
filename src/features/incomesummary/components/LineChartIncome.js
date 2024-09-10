import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

// Registering necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChartIncome() {
  // Get the canvas context from the chart component
  const getCanvasContext = () => {
    const canvas = document.createElement('canvas');
    return canvas.getContext('2d');
  };

  // Creating gradient for Income dataset
  const createIncomeGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(74, 0, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(74, 0, 255, 0)');
    return gradient;
  };

  // Initialize the canvas context
  const ctx = getCanvasContext();

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to take the full width
    plugins: {
      legend: {
        display: true, // Enable legend
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Static Income Data
  const incomeData = [800, 950, 1200, 1100, 1300, 1150, 1400, 1500, 1600, 1700, 1800, 1900];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Income',
        data: incomeData,
        borderColor: 'rgb(74, 0, 255)',
        backgroundColor: createIncomeGradient(ctx),
        tension: 0.4, // Smooth the line
        pointRadius: 4, // Control the data point size
      }
    ],
  };

  return (
    <TitleCard title={"Cashflow"}>
      <div className="w-full h-96">
        <Line data={data} options={options} />
      </div>
    </TitleCard>
  );
}

export default LineChartIncome;
