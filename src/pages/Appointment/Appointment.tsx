import { faker } from '@faker-js/faker'
import { useContext, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { Button, Calendar, Card, Label, Modal } from '@/components'
import { Table } from '@/components/Table'

import { LineChart } from './charts'

import { AppContext } from '@/context/AppContext'
import { SystemPage } from '@/templates'

const Appointment = () => {
  const { t } = useTranslation('appointmentText')
  const { schedule } = useContext(AppContext)
  const [showPatientModal, setShowPatientModal] = useState(false)

  const tableHeader = [
    {
      text: t('appointmentText:table.headers.0')
    },
    {
      text: t('appointmentText:table.headers.1')
    },
    {
      text: t('appointmentText:table.headers.2')
    },
    {
      text: t('appointmentText:table.headers.3')
    }
  ]

  return (
    <SystemPage.Root title={t('title')}>
      <SystemPage.Section>
        <Table.Root title={t('table.title')}>
          <Table.Header data={tableHeader} />
          <Table.Body>
            {schedule?.map((row, index) => (
              <Table.Row key={index}>
                <Table.Cell>{row.code}</Table.Cell>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.plan}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => setShowPatientModal(true)}>
                    {t('table.btn')}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />
        <Card.Root title={t('cards.patientStatistics.title')}>
          <Card.Item>
            <LineChart />
          </Card.Item>
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
        <Label title={t('modal.values')}>
          {faker.finance.amount(50, 200, 2, '$')}
        </Label>
      </Modal>
    </SystemPage.Root>
  )
}

export default Appointment
