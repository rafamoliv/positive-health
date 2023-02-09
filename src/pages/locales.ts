import { appointmentEn, appointmentPtBr } from './Appointment'
import { dashboardEn, dashboardPtBr } from './Dashboard'
import { scheduleEn, schedulePtBr } from './Schedule'
import { signInEn, signInPtBr } from './SignIn'

const pagesEn = {
  ...dashboardEn,
  ...appointmentEn,
  ...scheduleEn,
  ...signInEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...appointmentPtBr,
  ...schedulePtBr,
  ...signInPtBr
}

export { pagesEn, pagesPtBr }
