import { Transaction } from "..";

export interface IPosition {
  ticker: string;
  shareCount: number;
  averagePrice: number;
  transactions: Transaction[];

  addTransaction: (transaction:Transaction) => IPosition;
  calculateValue: (currentPrice:number) => number;
  calculateProfit: (currentPrice:number) => number;
  calculateProfitPercentage: (currentPrice:number) => number;
}
