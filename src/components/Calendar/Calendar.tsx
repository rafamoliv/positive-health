/* eslint-disable no-unused-vars */
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
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
  const buttonStyles = 'bg-transparent border-0'

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h4>Calendar</h4>

      <div className="d-flex gap-4">
        <span>{format(currentMonth, dateFormat)}</span>

        <div className="d-flex gap-2">
          <button
            className={clsx(buttonStyles)}
            onClick={() => changeWeekHandle('prev')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={clsx(buttonStyles)}
            onClick={() => changeWeekHandle('next')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
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
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 })
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center text-center" key={i}>
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
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 })
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 0 })
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
          className={clsx('col cell text-center', {
            'text-success': isSameDay(day, new Date()),
            'text-warning': isSameDay(day, selectedDate)
          })}
          key={i}
          onClick={() => onDateClickHandle(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
        </div>
      )
      day = addDays(day, 1)
    }

    rows.push(
      <div className="row" key={formattedDate}>
        {days}
      </div>
    )
    days = []
  }
  return <div className="cells">{rows}</div>
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
    <div>
      <Header changeWeekHandle={changeWeekHandle} currentMonth={currentMonth} />
      <div className="bg-white rounded-5 p-4">
        <Days currentMonth={currentMonth} />
        <Cells
          currentMonth={currentMonth}
          onDateClickHandle={onDateClickHandle}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  )
}
