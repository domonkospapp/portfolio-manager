import { transactions } from '@portfolio-manager/portfolio/fake-data-provider';
import { transactionsPositionsConverter } from '@portfolio-manager/portfolio/utils';
import { render, screen } from '@testing-library/react';
import { PositionList } from './PositionList'
describe('PortfolioPositions', () => {
  it('should render successfully', () => {
    const positions = transactionsPositionsConverter(transactions)
    const getCurrentPrice = jest.fn().mockReturnValue(200)

    render(<PositionList positions={positions} getCurrentPrice={getCurrentPrice} />)
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toEqual(3)
  });
});
