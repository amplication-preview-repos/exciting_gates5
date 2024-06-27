import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  createdAt: Date;
  id: string;
  pin: string;
  totalAmount: number;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User;
};
