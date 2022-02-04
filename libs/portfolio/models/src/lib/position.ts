import { IPosition, Transaction } from "@portfolio-manager/portfolio/interfaces";

export class Position implements IPosition {
  ticker: string;
  shareCount: number;
  averagePrice: number;
  transactions: Transaction[]

  constructor(ticker:string){
    this.ticker = ticker
    this.shareCount = 0
    this.averagePrice = 0
    this.transactions = []
  }

  static build(position:Position):Position{
    return Object.assign(new Position(position.ticker), position);
  }

  addTransaction(transaction:Transaction):Position{
    this.transactions.push(transaction)
    this.shareCount+=transaction.amount
    this.averagePrice = this.calculateAveragePrice()
    return this
  }

  calculateValue(currentPrice:number):number{
    return this.shareCount * currentPrice
  }

  calculateProfit(currentPrice:number):number{
    return (currentPrice - this.averagePrice) * this.shareCount
  }

  calculateProfitPercentage(currentPrice:number):number{
    return currentPrice/this.averagePrice*100
  }

  private calculateAveragePrice():number {
    return this.transactions.reduce((a, t) => a + t.amount*t.price, 0) / this.shareCount;
  }

}
