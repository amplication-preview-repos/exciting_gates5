import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  metadata: JsonValue;
  transactionType?: "Withdraw" | "Deposit" | "Spend" | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
