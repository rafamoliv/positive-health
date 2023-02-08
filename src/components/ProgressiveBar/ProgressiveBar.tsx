import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { ProgressBar } from 'react-bootstrap'

interface ProgressiveBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  icon: IconProp
  label: string
  now: number
  variant?: string
}

export const ProgressiveBar = ({
  className,
  icon,
  label,
  now,
  variant = 'success'
}: ProgressiveBarProps) => {
  return (
    <div className={clsx('d-flex align-items-center gap-4', className)}>
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <p>{label}</p>
          <span>{`${now}%`}</span>
        </div>
        <ProgressBar now={now} variant={variant} />
      </div>
      <div className={`bg-${variant} p-3 rounded-4`}>
        <FontAwesomeIcon
          className="text-white text-opacity-75 fs-3"
          icon={icon}
        />
      </div>
    </div>
  )
}
