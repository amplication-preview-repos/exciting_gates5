import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
