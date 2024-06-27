import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  transactionType?: "Withdraw" | "Deposit" | "Spend";
  wallet?: WalletWhereUniqueInput;
};
