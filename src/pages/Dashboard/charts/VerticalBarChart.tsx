import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const VerticalBarChart = () => {
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

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue US$',
        data: labels.map(() => faker.finance.amount(5000, 7000)),
        backgroundColor: '#7A8991'
      },
      {
        label: 'Target US$',
        data: labels.map(() => faker.finance.amount(6000, 8000)),
        backgroundColor: '#EAF0F1'
      }
    ]
  }

  return <Bar data={data} options={options} />
}
