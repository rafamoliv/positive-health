import { faker } from '@faker-js/faker'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Alert, Figure } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import { Calendar, Card, Form } from '@/components'
import { nameLastNameRegExp } from '@/utils/validations'

import config from './Schedule.config'

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
  const { t } = useTranslation('scheduleText')
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
    scheduledPatients.push({
      avatar: faker.image.avatar(),
      email: email,
      name: fullname
    })
    setShowAlert(true)
  }

  const scheduledPatients = config.patients

  return (
    <SystemPage.Root title={t('title')}>
      <SystemPage.Section>
        <Card.Root title={t('cards.schedule.title')}>
          <Card.Item>
            <Form.Root onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-between">
                <Form.Input
                  className="w-100 me-3"
                  error={errors.fullname?.message}
                  id={'fullname'}
                  placeholder={t('form.name')}
                  register={register}
                  type="text"
                />
                <Form.Input
                  error={errors.date?.message}
                  id={'date'}
                  placeholder={t('form.date')}
                  register={register}
                  type="date"
                />
              </div>
              <Form.Input
                error={errors.email?.message}
                id={'email'}
                placeholder={t('form.email')}
                register={register}
                type="text"
              />
              <div className="d-flex justify-content-between">
                <Form.Input
                  className="w-50 me-3"
                  error={errors.specialty?.message}
                  id={'specialty'}
                  placeholder={t('form.specialty')}
                  register={register}
                  type="text"
                />
                <Form.Input
                  className="w-50"
                  error={errors.doctor?.message}
                  id={'doctor'}
                  placeholder={t('form.doctor')}
                  register={register}
                  type="text"
                />
              </div>
              <Form.Button disabled={!isValid}>{t('form.btn')}</Form.Button>
            </Form.Root>
          </Card.Item>
        </Card.Root>

        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="success"
        >
          <Alert.Heading>{t('alert.title')}</Alert.Heading>
          <p>{faker.lorem.paragraph()}</p>
        </Alert>
      </SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />

        <div className="schedule">
          <Card.Root title={t('cards.applications.title')}>
            <div className="d-flex flex-column gap-2 schedule__patients">
              {scheduledPatients.map((x, i) => (
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
                    <span>{x.email}</span>
                  </div>
                </Card.Item>
              ))}
            </div>
          </Card.Root>
        </div>
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Schedule
