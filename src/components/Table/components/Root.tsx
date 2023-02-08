import { Table } from 'react-bootstrap'

import { TableRootProps } from '../types'

export function TableRoot({ children, title }: TableRootProps) {
  return (
    <div>
      <h4>{title}</h4>
      <Table className="bg-white" responsive>
        {children}
      </Table>
    </div>
  )
}
