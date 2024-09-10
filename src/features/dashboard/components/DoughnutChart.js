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

ChartJS.register(ArcElement, Tooltip, Legend,
    Tooltip,
    Filler,
    Legend);

    function DoughnutChart() {

      const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
      };
        
      const labels = ['Electronics', 'Home Appliances', 'Beauty', 'Furniture', 'Watches', 'Apparel'];
        
      const data = {
          labels,
          datasets: [
              {
                  label: '# of Orders',
                  data: [219, 122, 82, 51, 30, 13],
                  backgroundColor: [
                      'rgba(74, 0, 255, 0.8)',  // Warna 1 dengan transparansi 0.8
                      'rgba(74, 0, 255, 0.6)',  // Warna 2 dengan transparansi 0.6
                      'rgba(74, 0, 255, 0.4)',  // Warna 3 dengan transparansi 0.4
                      'rgba(74, 0, 255, 0.3)',  // Warna 4 dengan transparansi 0.3
                      'rgba(74, 0, 255, 0.2)',  // Warna 5 dengan transparansi 0.2
                      'rgba(74, 0, 255, 0.1)',  // Warna 6 dengan transparansi 0.1
                  ],
                  // borderColor: [
                  //     'rgba(74, 0, 255, 0.8)',  // Border 1
                  //     'rgba(74, 0, 255, 0.6)',  // Border 2
                  //     'rgba(74, 0, 255, 0.4)',  // Border 3
                  //     'rgba(74, 0, 255, 0.3)',  // Border 4
                  //     'rgba(74, 0, 255, 0.2)',  // Border 5
                  //     'rgba(74, 0, 255, 0.1)',  // Border 6
                  // ],
                  // borderWidth: 1,
              }
          ],
      };
  
      return (
        <TitleCard title={"Orders by Category"} subtitle={<Subtitle>As of 24th June 2022</Subtitle>}>
            <div>
              <Doughnut data={data} options={options} />
            </div>
        </TitleCard>
      );
  }
  
  export default DoughnutChart;
  