import { Figure } from 'react-bootstrap'

import { Button } from '@/components/Button'
import { Calendar } from '@/components/Calendar'
import { Card } from '@/components/Card'

import config from './Dashboard.config'
import { LineChart } from './charts/LineChart'
import { PieChart } from './charts/PieChart'

import { SystemPage } from '@/templates/SystemPage'

const Dashboard = () => {
  return (
    <SystemPage.Root>
      <SystemPage.Section>
        <Card.Root title={'Consultas agendadas'}>
          <Card.Item>
            <PieChart />
          </Card.Item>
        </Card.Root>
      </SystemPage.Section>
      <SystemPage.Aside>
        <Calendar />

        <Card.Root title={'Patient Statistics'}>
          <Card.Item>
            <LineChart />
          </Card.Item>
        </Card.Root>

        <Card.Root title={'Scheduled patients'}>
          {config.patients.map((x, i) => (
            <Card.Item key={i}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <Figure className="m-0">
                    <Figure.Image
                      alt={`${x.name} avatar`}
                      className="mb-0"
                      height={40}
                      roundedCircle
                      src={x.avatar}
                      width={40}
                    />
                  </Figure>
                  <span>{x.name}</span>
                </div>
                <Button>View profile</Button>
              </div>
            </Card.Item>
          ))}
        </Card.Root>
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Dashboard
