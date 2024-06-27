import { InputJsonValue } from "../../types";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  metadata?: InputJsonValue;
  transactionType?: "Withdraw" | "Deposit" | "Spend" | null;
  wallet?: WalletWhereUniqueInput | null;
};
