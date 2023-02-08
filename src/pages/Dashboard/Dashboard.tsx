import { useTranslation } from 'react-i18next'

import { Calendar } from '@/components/Calendar'
import { Card } from '@/components/Card'

import { LineChart } from './charts/LineChart'
import { PieChart } from './charts/PieChart'

import { useFetchReposQuery } from '@/services/api'
import { SystemPage } from '@/templates/SystemPage'

const Dashboard = () => {
  const { t } = useTranslation('pgHome')
  const { data = [] } = useFetchReposQuery('')

  return (
    <SystemPage.Root>
      <SystemPage.Section>
        <div>
          <Card.Root title={'Consultas agendadas'}>
            <Card.Item>
              <PieChart />
            </Card.Item>
          </Card.Root>

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

        <Card.Root title={'Patient Statistics'}>
          <Card.Item>
            <LineChart />
          </Card.Item>
        </Card.Root>

        <Card.Root title={'Scheduled patients'}>
          <Card.Item>teste</Card.Item>
        </Card.Root>
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Dashboard
