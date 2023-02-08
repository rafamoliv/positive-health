import { TableHeaderProps } from '../types'

import { TableRow } from './Row'

export function TableHeader({ data }: TableHeaderProps) {
  return (
    <thead className="table__header">
      <TableRow>
        {data.map((head, index) => (
          <th key={index}>{head.text}</th>
        ))}
      </TableRow>
    </thead>
  )
}
