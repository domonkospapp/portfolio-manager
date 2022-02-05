import { TableCell, TableRow } from "@mui/material";
import { Transaction } from "@portfolio-manager/portfolio/interfaces";

const TransactionRow = (props: { transaction: Transaction }) => {
  const { transaction } = props;
  return (
    <TableRow key={transaction.id}>
      <TableCell>
        {transaction.date}
      </TableCell>
      <TableCell>{transaction.price}</TableCell>
      <TableCell align="right">{transaction.amount}</TableCell>
      <TableCell align="right">
        {transaction.fee}
      </TableCell>
    </TableRow>
  );
}

export default TransactionRow
