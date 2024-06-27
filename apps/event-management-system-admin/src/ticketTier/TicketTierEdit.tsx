import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TicketTierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="amountOnSale" source="amountOnSale" />
        <NumberInput step={1} label="amountOnSale_TS" source="amountOnSaleTs" />
        <NumberInput step={1} label="amountSold" source="amountSold" />
        <NumberInput step={1} label="amountSold_TS" source="amountSoldTs" />
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="endDate_TS" source="endDateTs" />
        <NumberInput label="purchasePrice" source="purchasePrice" />
        <NumberInput label="purchasePrice_TS" source="purchasePriceTs" />
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="startDate_TS" source="startDateTs" />
        <TextInput label="title" source="title" />
        <TextInput label="title_TS" source="titleTs" />
      </SimpleForm>
    </Edit>
  );
};
