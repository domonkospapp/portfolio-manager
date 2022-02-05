import { Broker } from "@portfolio-manager/portfolio/interfaces";

export const broker :Broker = {
  name: "Degiro",
  buyFee: 15,
  sellFee: 15,
  custodialFee: 50,
  created: new Date('01 29 2022')
}
