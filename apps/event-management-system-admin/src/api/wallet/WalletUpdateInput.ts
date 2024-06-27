import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutWalletsInput } from "./UserUpdateManyWithoutWalletsInput";

export type WalletUpdateInput = {
  pin?: string | null;
  totalAmount?: number | null;
  transactions?: InputJsonValue;
  users?: UserUpdateManyWithoutWalletsInput;
};
