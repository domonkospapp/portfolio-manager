import { TableCell, TableRow } from "@mui/material";

const TransactionHeader = () =>
  <TableRow>
    <TableCell>Date</TableCell>
    <TableCell>Price</TableCell>
    <TableCell align="right">Amount</TableCell>
    <TableCell align="right">Fee</TableCell>
  </TableRow>

export default TransactionHeader
