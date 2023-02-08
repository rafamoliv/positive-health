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
import { useTranslation } from 'react-i18next'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const VerticalBarChart = () => {
  const { t } = useTranslation('dashboardText')

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
    t('charts.verticalBar.labels.0'),
    t('charts.verticalBar.labels.1'),
    t('charts.verticalBar.labels.2'),
    t('charts.verticalBar.labels.3'),
    t('charts.verticalBar.labels.4'),
    t('charts.verticalBar.labels.5'),
    t('charts.verticalBar.labels.6'),
    t('charts.verticalBar.labels.7'),
    t('charts.verticalBar.labels.8'),
    t('charts.verticalBar.labels.9'),
    t('charts.verticalBar.labels.10'),
    t('charts.verticalBar.labels.11')
  ]

  const data = {
    labels,
    datasets: [
      {
        label: t('charts.verticalBar.legend.0'),
        data: labels.map(() => faker.finance.amount(5000, 7000)),
        backgroundColor: '#7A8991'
      },
      {
        label: t('charts.verticalBar.legend.1'),
        data: labels.map(() => faker.finance.amount(6000, 8000)),
        backgroundColor: '#EAF0F1'
      }
    ]
  }

  return <Bar data={data} options={options} />
}
