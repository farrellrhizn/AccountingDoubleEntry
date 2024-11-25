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

function LineChart() {
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

  // Creating gradient for Expense dataset
  const createExpenseGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 0, 211, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 0, 211, 0)');
    return gradient;
  };

  // Initialize the canvas context
  const ctx = getCanvasContext();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // display: false, // Menonaktifkan legend
      },
    },
  };

  const labels = ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug'];

  // Data Income statis
  const incomeData = [800, 950, 1200, 1100, 1300, 1150, 1400];

  // Menghitung data Expense yang selalu lebih besar 1000 dari data Income
  const expenseData = incomeData.map(value => value + 500);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Income', // Label dihapus
        data: incomeData,
        borderColor: 'rgb(74, 0, 255)',
        backgroundColor: createIncomeGradient(ctx),
        tension: 0.4, // Menambahkan tension untuk garis mulus
        pointRadius: 4, // Menghilangkan pointer (titik data)
      },
      {
        fill: true,
        label: 'Expense', // Label dihapus
        data: expenseData,
        borderColor: 'rgb(255, 0, 211)',
        backgroundColor: createExpenseGradient(ctx),
        tension: 0.4, // Menambahkan tension untuk garis mulus
        pointRadius: 4, // Menghilangkan pointer (titik data)
      },
    ],
  };

  return (
    <TitleCard title={"Cashflow"}>
      <Line data={data} options={options} />
    </TitleCard>
  );
}

export default LineChart;