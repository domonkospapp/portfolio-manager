import { transactions } from "@portfolio-manager/portfolio/fake-data-provider";

export const getAllTransactions = () => transactions;
export const getTransaction = (id: string) => transactions.find((order) => order.id === id);
