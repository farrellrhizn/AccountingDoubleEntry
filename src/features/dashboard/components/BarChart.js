import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        maintainAspectRatio: false, // Menonaktifkan aspect ratio bawaan agar height bisa diatur manual
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Income',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgb(74, 0, 255)',
          },
          {
            label: 'Expense',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgb(164, 127, 255)',
          },
        ],
    };

    return (
      <TitleCard title={"Income vs Expense"}>
            <div className="h-72">
                <Bar options={options} data={data} />
            </div>
      </TitleCard>
    );
}

export default BarChart;