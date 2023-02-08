import { faker } from '@faker-js/faker'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Calendar, Card, Form } from '@/components'
import { nameLastNameRegExp } from '@/utils/validations'

import { SystemPage } from '@/templates'

export interface ScheduleFormData {
  email: string
  fullname: string
  date: Date
  doctor: string
  specialty: string
}

const scheduleFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  fullname: yup
    .string()
    .trim()
    .min(3)
    .matches(nameLastNameRegExp, 'First and last name is required')
    .required(),
  doctor: yup.string().trim().min(3).required(),
  specialty: yup.string().trim().min(3).required(),
  date: yup.date().required()
})

const Schedule = () => {
  const [showAlert, setShowAlert] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ScheduleFormData>({
    mode: 'onChange',
    resolver: yupResolver(scheduleFormSchema)
  })

  const onSubmit = ({
    email,
    date,
    fullname,
    doctor,
    specialty
  }: ScheduleFormData) => {
    console.log({ email, date, fullname, doctor, specialty })
    setShowAlert(true)
  }

  return (
    <SystemPage.Root title="Schedule">
      <SystemPage.Section>
        <Card.Root title={'Schedule appointment'}>
          <Card.Item>
            <Form.Root onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-between">
                <Form.Input
                  className="w-100 me-3"
                  error={errors.fullname?.message}
                  id={'fullname'}
                  placeholder={'Fullname'}
                  register={register}
                  type="text"
                />
                <Form.Input
                  error={errors.date?.message}
                  id={'date'}
                  placeholder={'Date'}
                  register={register}
                  type="date"
                />
              </div>
              <Form.Input
                error={errors.email?.message}
                id={'email'}
                placeholder={'Email'}
                register={register}
                type="text"
              />
              <div className="d-flex justify-content-between">
                <Form.Input
                  className="w-50 me-3"
                  error={errors.specialty?.message}
                  id={'specialty'}
                  placeholder={'Specialty'}
                  register={register}
                  type="text"
                />
                <Form.Input
                  className="w-50"
                  error={errors.doctor?.message}
                  id={'doctor'}
                  placeholder={'Doctor'}
                  register={register}
                  type="text"
                />
              </div>
              <Form.Button disabled={!isValid}>Schedule</Form.Button>
            </Form.Root>
          </Card.Item>
        </Card.Root>

        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="success"
        >
          <Alert.Heading>Registration done!</Alert.Heading>
          <p>{faker.lorem.paragraph()}</p>
        </Alert>
      </SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Schedule
