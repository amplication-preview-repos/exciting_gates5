import { InputJsonValue } from "../../types";

export type TransactionCreateInput = {
  amount?: number | null;
  amountTxn?: number | null;
  metadata?: InputJsonValue;
  metadataTs?: InputJsonValue;
  metadataTxn?: InputJsonValue;
  transactionType?: string | null;
  transactionTypeEnumTs?: "Option1" | null;
  transactionTypeTs?: string | null;
  transactionTypeTxn?: string | null;
  walletRelationTxn?: string | null;
  walletTxn?: string | null;
};
