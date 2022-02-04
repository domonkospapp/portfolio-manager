import { Transaction } from "@portfolio-manager/portfolio/interfaces"
import { Position } from "@portfolio-manager/portfolio/models"

export const transactionsPositionsConverter = (transactions: Transaction[]): Position[] => {
  return transactions.reduce(positionReducer, [] as Position[])
}

const positionReducer = (positions: Position[], transaction: Transaction): Position[]=> {
  const index = getPositionIndex(transaction, positions)
  index > -1
    ? positions[index].addTransaction(transaction)
    : positions.push(new Position(transaction.ticker).addTransaction(transaction))
  return positions
}

const getPositionIndex = (transaction: Transaction,positions: Position[]): number => {
  return positions.findIndex(p=> p.ticker == transaction.ticker)
}
