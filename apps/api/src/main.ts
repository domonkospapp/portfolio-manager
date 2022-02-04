import * as express from 'express';
import { getAllTransactions, getTransaction } from './app/transactionRepository';
import { transactionsPositionsConverter } from '@portfolio-manager/portfolio/utils';

const app = express();

app.get('/api/transactions', (req, res) => {
  const transactions = getAllTransactions();
  const positions = transactionsPositionsConverter(transactions);
  res.send(positions);
});

app.get('/api/transactions/:id', (req, res) => {
  const transactionId = req.params.id;
  const transaction = getTransaction(transactionId)
  res.send(transaction);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
