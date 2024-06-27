import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  pin?: string;
  totalAmount?: number;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput;
};
