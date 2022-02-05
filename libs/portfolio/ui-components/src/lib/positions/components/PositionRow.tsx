import { useEffect, useState } from "react";
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TransactionRow from "./TransactionRow";
import TransactionHeader from "./TransactionHeader";
import { Position } from "@portfolio-manager/portfolio/models";

interface PositionRowProps{
  position: Position,
  getCurrentPrice:(ticker: string) => number,
  updateFrequency_ms?: number
}

const PositionRow = (props: PositionRowProps) => {
  const { position, getCurrentPrice, updateFrequency_ms } = props;
  const [open, setOpen] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(getCurrentPrice(position.ticker))
    }, updateFrequency_ms);

    return () => clearInterval(interval);
  }, [])


  const profitAndLoss = ():string => {
    const profit = Math.round(position.calculateProfit(currentPrice))
    const percentage = Math.round(position.calculateProfitPercentage(currentPrice))
    return `$${profit} (${percentage}%)`
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {position.ticker}
        </TableCell>
        <TableCell align="right">{position.shareCount} pcs</TableCell>
        <TableCell align="right">${position.averagePrice}</TableCell>
        <TableCell align="right">${position && position.calculateValue(currentPrice)}</TableCell>
        <TableCell align="right">
          {profitAndLoss()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TransactionHeader/>
                </TableHead>
                <TableBody>
                  {position.transactions.map(transaction =>
                    <TransactionRow key={transaction.id} transaction={transaction}/>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

PositionRow.defaultProps = {
  updateFrequency_ms: 2500
}

export default PositionRow
