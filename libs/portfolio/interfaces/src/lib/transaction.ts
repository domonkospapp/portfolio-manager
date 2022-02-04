import { Broker } from "./broker";

export interface Transaction {
  id: string
  ticker: string;
  amount: number;
  price: number;
  fee: number;
  currency: string;
  marketplace: string;
  date: Date;
  created: Date;
  broker: Broker;
}
