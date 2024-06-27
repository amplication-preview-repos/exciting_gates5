import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WalletWhereInput = {
  id?: StringFilter;
  pin?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  transactions?: JsonFilter;
  users?: UserListRelationFilter;
};
