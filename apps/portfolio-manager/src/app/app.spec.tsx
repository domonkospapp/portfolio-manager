import { transactions } from '@portfolio-manager/portfolio/fake-data-provider';
import { transactionsPositionsConverter } from '@portfolio-manager/portfolio/utils';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App test', () => {
  it('should render title', () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => (transactionsPositionsConverter(transactions)),
    });
    render(<App />);
    const title = screen.getByRole('heading')
    expect(title).toBe(/Welcome to portfolio-manager!/)
  });
  it('should render tickers', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => (transactionsPositionsConverter(transactions)),
    });
    render(<App />);
    await screen.findByText('TSLA')
    screen.getByText('DBX')
    screen.getByText('PLTR')
  });
});
