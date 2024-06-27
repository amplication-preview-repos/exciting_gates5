import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { WalletTitle } from "../wallet/WalletTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <div />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[
            { label: "Withdraw", value: "Withdraw" },
            { label: "Deposit", value: "Deposit" },
            { label: "Spend", value: "Spend" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="wallet.id" reference="Wallet" label="Wallet">
          <SelectInput optionText={WalletTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
