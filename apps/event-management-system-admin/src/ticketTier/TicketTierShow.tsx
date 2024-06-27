import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TicketTierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amountOnSale" source="amountOnSale" />
        <TextField label="amountOnSale_TS" source="amountOnSaleTs" />
        <TextField label="amountSold" source="amountSold" />
        <TextField label="amountSold_TS" source="amountSoldTs" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <TextField label="endDate_TS" source="endDateTs" />
        <TextField label="ID" source="id" />
        <TextField label="purchasePrice" source="purchasePrice" />
        <TextField label="purchasePrice_TS" source="purchasePriceTs" />
        <TextField label="startDate" source="startDate" />
        <TextField label="startDate_TS" source="startDateTs" />
        <TextField label="title" source="title" />
        <TextField label="title_TS" source="titleTs" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
