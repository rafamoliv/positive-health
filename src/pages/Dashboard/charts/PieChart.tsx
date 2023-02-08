import { faker } from '@faker-js/faker'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  }

  const pieChart = {
    labels: ['Credit Card', 'Billet', 'Cash'],
    datasets: [
      {
        label: 'US$',
        data: [
          faker.finance.amount(50, 300),
          faker.finance.amount(50, 300),
          faker.finance.amount(50, 300)
        ],
        backgroundColor: ['#EAF0F1', '#B4C4CC', '#BCCCCC']
      }
    ]
  }

  return <Pie data={pieChart} options={options} />
}
