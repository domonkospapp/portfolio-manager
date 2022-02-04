import { Transaction } from "@portfolio-manager/portfolio/interfaces";
import { Position } from "./position"
describe('Portfolio Position Summarizer Test', () => {
  it('Test empty position and add transaction', () => {
    const position = new Position("TSLA")
    expect(position.transactions.length).toEqual(0)
    expect(position.shareCount).toEqual(0)
    expect(position.averagePrice).toEqual(0)

    position.addTransaction({
      id: "1",
      ticker: "TSLA",
      amount: 20,
      price: 600,
    } as Transaction)

    expect(position.transactions.length).toEqual(1)
    expect(position.shareCount).toEqual(20)
    expect(position.averagePrice).toEqual(600)
  });
  it('Test empty position and add transaction', () => {
    const position = new Position("TSLA")
    position.addTransaction({
      id: "1",
      ticker: "TSLA",
      amount: 20,
      price: 600,
    } as Transaction)
    position.addTransaction({
      id: "2",
      ticker: "TSLA",
      amount: 10,
      price: 1200,
    } as Transaction)

    expect(position.transactions.length).toEqual(2)
    expect(position.shareCount).toEqual(30)
    expect(position.averagePrice).toEqual(800)
  });
  it('Test functions based on current price', () => {
    const position = new Position("TSLA")
    position.addTransaction({
      id: "1",
      ticker: "TSLA",
      amount: 20,
      price: 600,
    } as Transaction)

    expect(position.calculateProfit(400)).toEqual(-4000)
    expect(position.calculateProfit(700)).toEqual(2000)

    expect(Math.round(position.calculateProfitPercentage(400))).toEqual(67)
    expect(Math.round(position.calculateProfitPercentage(700))).toEqual(117)

    expect(position.calculateValue(400)).toEqual(8000)
    expect(position.calculateValue(700)).toEqual(14000)
  });

});

