import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="amountTxn" source="amountTxn" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="metadata" source="metadata" />
        <TextField label="metadata_TS" source="metadataTs" />
        <TextField label="metadataTxn" source="metadataTxn" />
        <TextField label="transactionType" source="transactionType" />
        <TextField
          label="transactionTypeEnumTs"
          source="transactionTypeEnumTs"
        />
        <TextField label="transactionType_TS" source="transactionTypeTs" />
        <TextField label="transactionTypeTxn" source="transactionTypeTxn" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="walletRelationTxn" source="walletRelationTxn" />
        <TextField label="walletTxn" source="walletTxn" />
      </SimpleShowLayout>
    </Show>
  );
};
