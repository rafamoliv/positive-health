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
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('appointmentText')

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
    t('charts.line.labels.0'),
    t('charts.line.labels.1'),
    t('charts.line.labels.2'),
    t('charts.line.labels.3'),
    t('charts.line.labels.4'),
    t('charts.line.labels.5'),
    t('charts.line.labels.6')
  ]

  const data = {
    labels,
    datasets: [
      {
        label: t('charts.line.legend.0'),
        data: labels.map(() => faker.datatype.number({ min: 8, max: 20 })),
        borderColor: '#79969B',
        backgroundColor: '#79969B'
      },
      {
        label: t('charts.line.legend.1'),
        data: labels.map(() => faker.datatype.number({ min: 5, max: 10 })),
        borderColor: '#68697D',
        backgroundColor: '#68697D'
      }
    ]
  }

  return <Line data={data} options={options} />
}
