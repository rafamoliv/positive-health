import { faker } from '@faker-js/faker'
import { useContext, useState } from 'react'
import { Figure } from 'react-bootstrap'

import { Calendar, Label, Modal } from '@/components'
import { Table } from '@/components/Table'

import config from './Appointment.config'

import { AppContext } from '@/context/AppContext'
import { SystemPage } from '@/templates'

const Appointment = () => {
  const { schedule } = useContext(AppContext)
  const [showPatientModal, setShowPatientModal] = useState(false)

  return (
    <SystemPage.Root title="Appointments">
      <SystemPage.Section>
        <Table.Root title={'Schedule'}>
          <Table.Header data={config.tableHeader} />
          <Table.Body>
            {schedule?.map((row, index) => (
              <Table.Row key={index}>
                <Table.Cell>{row.code}</Table.Cell>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.plan}</Table.Cell>
                <Table.Cell>btn</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />
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
    </SystemPage.Root>
  )
}

export default Appointment
