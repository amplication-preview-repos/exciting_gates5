import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TicketTierList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TicketTiers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
