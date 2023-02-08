import { faker } from '@faker-js/faker'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'

ChartJS.register(ArcElement, Tooltip)

export const DoughnutChart = () => {
  const { t } = useTranslation('dashboardText')

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  }

  const doughnutChart = {
    labels: [t('charts.doughtnut.labels.0'), t('charts.doughtnut.labels.1')],
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

  return <Doughnut data={doughnutChart} options={options} />
}
