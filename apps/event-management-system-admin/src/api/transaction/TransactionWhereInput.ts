import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  amountTxn?: FloatNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  metadataTs?: JsonFilter;
  metadataTxn?: JsonFilter;
  transactionType?: StringNullableFilter;
  transactionTypeEnumTs?: "Option1";
  transactionTypeTs?: StringNullableFilter;
  transactionTypeTxn?: StringNullableFilter;
  walletRelationTxn?: StringNullableFilter;
  walletTxn?: StringNullableFilter;
};
