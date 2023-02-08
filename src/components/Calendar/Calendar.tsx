/* eslint-disable no-unused-vars */
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  addWeeks,
  subWeeks
} from 'date-fns'
import { useState } from 'react'

interface CalendarProps {
  currentMonth: Date
}

/**
 * Calendar Header
 * @param {Date} currentMonth
 * @param {func} changeWeekHandle
 */

interface HeaderProps extends CalendarProps {
  changeWeekHandle: (btn: string) => void
}

const Header = ({ currentMonth, changeWeekHandle }: HeaderProps) => {
  const dateFormat = 'MMMM yyyy'

  return (
    <div className="header row flex-middle">
      <div className="col col-start"></div>
      <div className="col col-center">
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle('prev')}>
            prev week
          </div>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle('next')}>
          <div className="icon">next week</div>
        </div>
      </div>
      <div className="col col-end"></div>
    </div>
  )
}

/**
 * Calendar Days of Week
 * @param {Date} currentMonth
 */

type DaysProps = CalendarProps

const Days = ({ currentMonth }: DaysProps) => {
  const dateFormat = 'EEE'
  const days = []
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    )
  }
  return <div className="days row">{days}</div>
}

/**
 * Calendar Cells
 * @param {Date} currentMonth
 */

interface CellsProps extends CalendarProps {
  onDateClickHandle: (date: Date) => void
  selectedDate: Date
}

const Cells = ({
  currentMonth,
  onDateClickHandle,
  selectedDate
}: CellsProps) => {
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 })
  const dateFormat = 'd'
  const rows = []
  let days = []
  let day = startDate
  let formattedDate = ''
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat)
      const cloneDay = day
      days.push(
        <div
          className={`col cell ${
            isSameDay(day, new Date())
              ? 'today'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
          onClick={() => onDateClickHandle(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
        </div>
      )
      day = addDays(day, 1)
    }

    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    )
    days = []
  }
  return <div className="body">{rows}</div>
}

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const changeWeekHandle = (btnType: string) => {
    if (btnType === 'prev') {
      setCurrentMonth(subWeeks(currentMonth, 1))
    }
    if (btnType === 'next') {
      setCurrentMonth(addWeeks(currentMonth, 1))
    }
  }

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <div className="bg-white rounded-5 p-4">
      <Header changeWeekHandle={changeWeekHandle} currentMonth={currentMonth} />
      <Days currentMonth={currentMonth} />
      <Cells
        currentMonth={currentMonth}
        onDateClickHandle={onDateClickHandle}
        selectedDate={selectedDate}
      />
    </div>
  )
}
