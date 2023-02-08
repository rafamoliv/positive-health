import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'

import { Calendar } from '@/components/Calendar'
import { Card } from '@/components/Card'

import { useFetchReposQuery } from '@/services/api'
import { SystemPage } from '@/templates/SystemPage'

ChartJS.register(ArcElement, Tooltip)

const Dashboard = () => {
  const { t } = useTranslation('pgHome')
  const { data = [] } = useFetchReposQuery('')

  const dataChart = {
    labels: ['Atendidos', 'Pendente de atendimento'],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ['rgb(119, 120, 135)', 'rgb(121, 150, 155)']
      }
    ]
  }

  return (
    <SystemPage.Root>
      <SystemPage.Section>
        <div>
          <Card title={'Consultas agendadas'}>
            <Doughnut data={dataChart} />
          </Card>

          <div>
            <p>
              <strong>{t('redux')}</strong>
            </p>
            {data?.map((x, i) => {
              return <p key={i}>{x.name}</p>
            })}
          </div>
        </div>
      </SystemPage.Section>
      <SystemPage.Aside>
        <Calendar />
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Dashboard
