import { faker } from '@faker-js/faker'
import { faFaceSadCry, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Figure, Toast, ToastContainer } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { Button, Calendar, Card, Label, Modal } from '@/components'
import { ProgressiveBar } from '@/components/ProgressiveBar'

import config from './Dashboard.config'
import { LineChart, DoughnutChart, PieChart, VerticalBarChart } from './charts'

import { SystemPage } from '@/templates'

const Dashboard = () => {
  const { t } = useTranslation('dashboardText')
  const [showPatientModal, setShowPatientModal] = useState(false)
  const [showToast, setShowToast] = useState(true)

  const positiveReviewProgressiveBar = faker.datatype.number({
    min: 60,
    max: 95
  })
  const negativeProgressiveBar = 100 - positiveReviewProgressiveBar

  return (
    <SystemPage.Root title={t('title')}>
      <SystemPage.Section>
        <div className="d-flex mw-100 gap-2 mb-3 justify-content-between">
          <Card.Root title={t('cards.dailySchedules.title')}>
            <Card.Item>
              <DoughnutChart />
            </Card.Item>
          </Card.Root>
          <Card.Root title={t('cards.dailyRevenue.title')}>
            <Card.Item>
              <PieChart />
            </Card.Item>
          </Card.Root>
        </div>

        <Card.Root className="mb-3" title={t('cards.monthlyRevenue.title')}>
          <Card.Item>
            <VerticalBarChart />
          </Card.Item>
        </Card.Root>

        <Card.Root title={t('cards.analytics.title')}>
          <Card.Item>
            <ProgressiveBar
              className="mb-2"
              icon={faFaceSmile}
              label={t('cards.analytics.positive')}
              now={positiveReviewProgressiveBar}
              variant="success"
            />

            <ProgressiveBar
              icon={faFaceSadCry}
              label={t('cards.analytics.negative')}
              now={negativeProgressiveBar}
              variant="info"
            />
          </Card.Item>
        </Card.Root>
      </SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />

        <Card.Root title={t('cards.patientStatistics.title')}>
          <Card.Item>
            <LineChart />
          </Card.Item>
        </Card.Root>

        <Card.Root title={t('cards.patientApplication.title')}>
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
                  {t('cards.patientApplication.btn')}
                </Button>
              </div>
            </Card.Item>
          ))}
        </Card.Root>
      </SystemPage.Aside>

      <Modal
        onHide={() => setShowPatientModal(false)}
        show={showPatientModal}
        title={t('modal.title')}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Label title={'Id'}>{faker.datatype.uuid()}</Label>
            <Label
              title={t('modal.fullname')}
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
        <Label title={t('modal.email')}>{faker.internet.email()}</Label>
        <Label title={t('modal.address')}>
          {faker.address.streetAddress()}
        </Label>
        <Label title={t('modal.gender')}>{faker.name.sexType()}</Label>
        <Label title={t('modal.plan')}>
          {faker.helpers.arrayElement([
            t('modal.plans.0'),
            t('modal.plans.1'),
            t('modal.plans.2')
          ])}
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
            <small>
              {t('toast.time', {
                value: faker.datatype.number({ min: 2, max: 59 })
              })}
            </small>
          </Toast.Header>
          <Toast.Body>{faker.lorem.paragraph()}</Toast.Body>
        </Toast>
      </ToastContainer>
    </SystemPage.Root>
  )
}

export default Dashboard
