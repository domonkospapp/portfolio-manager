import { Transaction } from "@portfolio-manager/portfolio/interfaces";
import { broker } from "..";

export const transactions :Transaction[] = [
  {
    id: "1",
    ticker: "TSLA",
    amount: 20,
    price: 600,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  },
  {
    id: "2",
    ticker: "DBX",
    amount: 100,
    price: 27.5,
    fee: 14,
    currency: "EUR",
    marketplace: "GETTEX",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  },
  {
    id: "3",
    ticker: "TSLA",
    amount: 20,
    price: 500,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  },
  {
    id: "4",
    ticker: "PLTR",
    amount: 100,
    price: 14.5,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  },
  {
    id: "5",
    ticker: "PLTR",
    amount: 120,
    price: 12.5,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  },
  {
    id: "6",
    ticker: "PLTR",
    amount: 30,
    price: 17.8,
    fee: 17,
    currency: "USD",
    marketplace: "NASDAQ",
    date: new Date('01 29 2022'),
    created: new Date('01 29 2022'),
    broker: broker
  }
]
