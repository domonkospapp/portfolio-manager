import { transactions } from "@portfolio-manager/portfolio/fake-data-provider";
import { Position } from "@portfolio-manager/portfolio/models";
import {transactionsPositionsConverter} from "./transactions-positions-converter"
describe('Portfolio Position Summarizer Test', () => {
  it('Test position count', () => {
    const positions:Position[] = transactionsPositionsConverter(transactions)
    expect(positions.length).toEqual(3)
  });

  it('Test TSLA position summaries', () => {
    const positions:Position[] = transactionsPositionsConverter(transactions)
    expect(positions[0].ticker).toEqual("TSLA")
    expect(positions[0].averagePrice).toEqual(550)
    expect(positions[0].shareCount).toEqual(40)
    expect(positions[0].transactions.length).toEqual(2)
    expect(positions[0].calculateValue(1000)).toEqual(40000)
    expect(positions[0].calculateProfit(1000)).toEqual(18000)
  });

  it('Test DBX position summaries', () => {
    const positions:Position[] = transactionsPositionsConverter(transactions)
    expect(positions[1].ticker).toEqual("DBX")
    expect(positions[1].averagePrice).toEqual(27.5)
    expect(positions[1].shareCount).toEqual(100)
    expect(positions[1].transactions.length).toEqual(1)
    expect(positions[1].calculateValue(30.5)).toEqual(3050)
    expect(positions[1].calculateProfit(28.5)).toEqual(100)
  });

  it('Test PLTR position summaries', () => {
    const positions:Position[] = transactionsPositionsConverter(transactions)
    expect(positions[2].ticker).toEqual("PLTR")
    expect(positions[2].averagePrice).toEqual(13.936)
    expect(positions[2].shareCount).toEqual(250)
    expect(positions[2].transactions.length).toEqual(3)
    expect(positions[2].calculateValue(30.5)).toEqual(7625)
    expect(positions[2].calculateProfit(28.5)).toEqual(3641)
  });

});

