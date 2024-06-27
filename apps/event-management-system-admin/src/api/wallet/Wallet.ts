import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Wallet = {
  createdAt: Date;
  id: string;
  pin: string | null;
  totalAmount: number | null;
  transactions: JsonValue;
  updatedAt: Date;
  users?: Array<User>;
};
