import { appointmentEn, appointmentPtBr } from './Appointment'
import { dashboardEn, dashboardPtBr } from './Dashboard'
import { scheduleEn, schedulePtBr } from './Schedule'

const pagesEn = {
  ...dashboardEn,
  ...appointmentEn,
  ...scheduleEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...appointmentPtBr,
  ...schedulePtBr
}

export { pagesEn, pagesPtBr }
