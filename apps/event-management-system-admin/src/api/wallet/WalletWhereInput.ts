import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  id?: StringFilter;
  pin?: StringFilter;
  totalAmount?: FloatFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
