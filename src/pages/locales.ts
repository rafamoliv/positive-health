import { appointmentEn, appointmentPtBr } from './Appointment'
import { dashboardEn, dashboardPtBr } from './Dashboard'

const pagesEn = {
  ...dashboardEn,
  ...appointmentEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...appointmentPtBr
}

export { pagesEn, pagesPtBr }
