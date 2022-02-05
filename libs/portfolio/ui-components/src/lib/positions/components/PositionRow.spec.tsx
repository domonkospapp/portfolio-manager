import { Table, TableBody } from '@mui/material';
import { transactions } from '@portfolio-manager/portfolio/fake-data-provider';
import { transactionsPositionsConverter } from '@portfolio-manager/portfolio/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import PositionRow from './PositionRow';
describe('PortfolioPositions', () => {
  const positions = transactionsPositionsConverter(transactions)
  const getCurrentPrice = jest.fn().mockReturnValue(200)

  it('should render successfully', () => {
    render(
      <Table>
        <TableBody>
          <PositionRow position={positions[0]} getCurrentPrice={getCurrentPrice}  />
        </TableBody>
      </Table>
    );

    const cells = screen.getAllByRole("cell")
    expect(cells.length).toEqual(6)

    const openButton = screen.getByRole("button")
    fireEvent.click(openButton)

    const openedCells = screen.getAllByRole("cell")
    expect(openedCells.length).toEqual(14)
  });
});
