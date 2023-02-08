import { faker } from '@faker-js/faker'
import { useState } from 'react'
import { Figure } from 'react-bootstrap'

import { Button, Calendar, Card, Label, Modal } from '@/components'

import config from './Dashboard.config'
import { LineChart, PieChart } from './charts'

import { SystemPage } from '@/templates/SystemPage'

const Dashboard = () => {
  const [showPatientModal, setShowPatientModal] = useState(false)

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

        <Card.Root title={'Patient Application'}>
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
                <Button onClick={() => setShowPatientModal(true)}>
                  View profile
                </Button>
              </div>
            </Card.Item>
          ))}
        </Card.Root>

        <Modal
          onHide={() => setShowPatientModal(false)}
          show={showPatientModal}
          title={'Patient'}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Label title={'Id'}>{faker.datatype.uuid()}</Label>
              <Label
                title={'Fullname'}
              >{`${faker.name.firstName()} ${faker.name.lastName()}`}</Label>
            </div>
            <Figure className="m-0 rounded-2">
              <Figure.Image
                alt={`${faker.name.firstName()} avatar`}
                className="mb-0"
                height={136}
                rounded
                src={faker.image.avatar()}
                width={136}
              />
            </Figure>
          </div>
          <Label title={'Email'}>{faker.internet.email()}</Label>
          <Label title={'Address'}>{faker.address.streetAddress()}</Label>
          <Label title={'Gender'}>{faker.name.sexType()}</Label>
          <Label title={'Plan'}>
            {faker.helpers.arrayElement(['free', 'basic', 'business'])}
          </Label>
        </Modal>
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Dashboard
