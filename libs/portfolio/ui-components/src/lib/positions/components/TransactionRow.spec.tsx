import { Table, TableBody } from '@mui/material';
import { Broker, Transaction } from '@portfolio-manager/portfolio/interfaces';
import { render, screen } from '@testing-library/react';
import TransactionRow from './TransactionRow';
describe('PortfolioPositions', () => {
  const transaction = {
    id: "1",
    ticker: "DBX",
    amount: 55,
    price: 26.8,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: {} as Broker
  }as Transaction
  it('should render successfully', () => {
    render(
      <Table>
        <TableBody>
          <TransactionRow transaction={transaction} />
        </TableBody>
      </Table>
    );
    const cells = screen.getAllByRole("cell")
    expect(cells.length).toEqual(4)
  });
});
