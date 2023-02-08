import { faker } from '@faker-js/faker'
import { faFaceSadCry, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Figure, Toast, ToastContainer } from 'react-bootstrap'

import { Button, Calendar, Card, Label, Modal } from '@/components'
import { ProgressiveBar } from '@/components/ProgressiveBar'

import config from './Dashboard.config'
import { LineChart, DoughnutChart, PieChart, VerticalBarChart } from './charts'

import { SystemPage } from '@/templates/SystemPage'

const Dashboard = () => {
  const [showPatientModal, setShowPatientModal] = useState(false)
  const [showToast, setShowToast] = useState(true)

  const positiveReviewProgressiveBar = faker.datatype.number({
    min: 60,
    max: 95
  })
  const negativeProgressiveBar = 100 - positiveReviewProgressiveBar

  return (
    <SystemPage.Root title="Dashboard">
      <SystemPage.Section>
        <div className="d-flex mw-100 gap-2 mb-3 justify-content-between">
          <Card.Root title={'Daily schedules'}>
            <Card.Item>
              <DoughnutChart />
            </Card.Item>
          </Card.Root>
          <Card.Root title={'Daily revenue'}>
            <Card.Item>
              <PieChart />
            </Card.Item>
          </Card.Root>
        </div>

        <Card.Root className="mb-3" title={'Monthly revenue'}>
          <Card.Item>
            <VerticalBarChart />
          </Card.Item>
        </Card.Root>

        <Card.Root title={'Analytics'}>
          <Card.Item>
            <ProgressiveBar
              className="mb-2"
              icon={faFaceSmile}
              label={'Positive review'}
              now={positiveReviewProgressiveBar}
              variant="success"
            />

            <ProgressiveBar
              icon={faFaceSadCry}
              label={'Negative review'}
              now={negativeProgressiveBar}
              variant="info"
            />
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
      </SystemPage.Aside>

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

      <ToastContainer className="p-3 mt-40" position={'bottom-end'}>
        <Toast onClose={() => setShowToast(false)} show={showToast}>
          <Toast.Header>
            <Figure className="m-0">
              <Figure.Image
                alt={`${faker.name.firstName()} avatar`}
                className="mb-0"
                height={40}
                roundedCircle
                src={faker.image.avatar()}
                width={40}
              />
            </Figure>
            <strong className="me-auto mx-2">{`${faker.name.firstName()} ${faker.name.lastName()}`}</strong>
            <small>{faker.datatype.number({ min: 2, max: 59 })} mins ago</small>
          </Toast.Header>
          <Toast.Body>{faker.lorem.paragraph()}</Toast.Body>
        </Toast>
      </ToastContainer>
    </SystemPage.Root>
  )
}

export default Dashboard
