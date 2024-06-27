import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutWalletsInput } from "./UserCreateNestedManyWithoutWalletsInput";

export type WalletCreateInput = {
  pin?: string | null;
  totalAmount?: number | null;
  transactions?: InputJsonValue;
  users?: UserCreateNestedManyWithoutWalletsInput;
};
