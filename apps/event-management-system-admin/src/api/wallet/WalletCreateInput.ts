import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  pin: string;
  totalAmount: number;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  user: UserWhereUniqueInput;
};
