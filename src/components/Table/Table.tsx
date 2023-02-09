import { TableBody } from './components/Body'
import { TableCell } from './components/Cell'
import { TableHeader } from './components/Header'
import { TableRoot } from './components/Root'
import { TableRow } from './components/Row'

/**
 * Table component
 *
 * Usage example:
 * <Table.Root>
 *  <Table.Header data={string[]} />
 *  <Table.Body>
 *    <Table.Row>
 *      <Table.Cell>Example</Table.Cell>
 *    </Table.Row>
 *  </Table.Body>
 * <Table.Root/>
 */

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell
}
