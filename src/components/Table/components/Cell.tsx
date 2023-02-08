import { TableCellProps } from '../types'

export function TableCell({ children, key }: TableCellProps) {
  return <td key={key}>{children}</td>
}
