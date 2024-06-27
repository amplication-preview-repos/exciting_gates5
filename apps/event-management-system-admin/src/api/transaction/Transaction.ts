import { JsonValue } from "type-fest";

export type Transaction = {
  amount: number | null;
  amountTxn: number | null;
  createdAt: Date;
  id: string;
  metadata: JsonValue;
  metadataTs: JsonValue;
  metadataTxn: JsonValue;
  transactionType: string | null;
  transactionTypeEnumTs?: "Option1" | null;
  transactionTypeTs: string | null;
  transactionTypeTxn: string | null;
  updatedAt: Date;
  walletRelationTxn: string | null;
  walletTxn: string | null;
};
