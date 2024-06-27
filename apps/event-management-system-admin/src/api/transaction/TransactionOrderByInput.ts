import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  amountTxn?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  metadataTs?: SortOrder;
  metadataTxn?: SortOrder;
  transactionType?: SortOrder;
  transactionTypeEnumTs?: SortOrder;
  transactionTypeTs?: SortOrder;
  transactionTypeTxn?: SortOrder;
  updatedAt?: SortOrder;
  walletRelationTxn?: SortOrder;
  walletTxn?: SortOrder;
};
