import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    scales: {
      y: {
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const data = {
    labels,
    datasets: [
      {
        label: 'Scheduled',
        data: labels.map(() => faker.datatype.number({ min: 8, max: 20 })),
        borderColor: '#79969B',
        backgroundColor: '#79969B'
      },
      {
        label: 'Consulted',
        data: labels.map(() => faker.datatype.number({ min: 5, max: 10 })),
        borderColor: '#68697D',
        backgroundColor: '#68697D'
      }
    ]
  }

  return <Line data={data} options={options} />
}
