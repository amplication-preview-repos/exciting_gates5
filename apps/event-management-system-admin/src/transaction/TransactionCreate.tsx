import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="amountTxn" source="amountTxn" />
        <div />
        <div />
        <div />
        <TextInput label="transactionType" source="transactionType" />
        <SelectInput
          source="transactionTypeEnumTs"
          label="transactionTypeEnumTs"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="transactionType_TS" source="transactionTypeTs" />
        <TextInput label="transactionTypeTxn" source="transactionTypeTxn" />
        <TextInput label="walletRelationTxn" source="walletRelationTxn" />
        <TextInput label="walletTxn" source="walletTxn" />
      </SimpleForm>
    </Create>
  );
};
