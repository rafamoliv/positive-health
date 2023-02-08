import { faker } from '@faker-js/faker'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

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
    labels: ['Pendente de atendimento', 'Atendidos'],
    datasets: [
      {
        data: [
          faker.datatype.number({ min: 3, max: 10 }),
          faker.datatype.number({ min: 5, max: 8 })
        ],
        backgroundColor: ['#68697D', '#79969B']
      }
    ]
  }

  return <Doughnut data={pieChart} options={options} />
}
