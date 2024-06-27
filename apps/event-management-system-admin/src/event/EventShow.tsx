import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="approvedDate" source="approvedDate" />
        <TextField label="coverImage" source="coverImage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="eventLocation" source="eventLocation" />
        <TextField label="eventType" source="eventType" />
        <TextField label="guestPerformers" source="guestPerformers" />
        <TextField label="ID" source="id" />
        <BooleanField label="isApproved" source="isApproved" />
        <TextField label="title" source="title" />
        <TextField label="trailer" source="trailer" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PurchasedTicket"
          target="eventId"
          label="PurchasedTickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="qrCode" source="qrCode" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="ticket"
              source="ticket.id"
              reference="Ticket"
            >
              <TextField source={TICKET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SubAdmin"
          target="eventId"
          label="SubAdmins"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="eventRelation" source="eventRelation" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TicketTier"
          target="eventId"
          label="TicketTiers"
        >
          <Datagrid rowClick="show">
            <TextField label="amountOnSale" source="amountOnSale" />
            <TextField label="amountOnSale_TS" source="amountOnSaleTs" />
            <TextField label="amountSold" source="amountSold" />
            <TextField label="amountSold_TS" source="amountSoldTs" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="endDate_TS" source="endDateTs" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="purchasePrice" source="purchasePrice" />
            <TextField label="purchasePrice_TS" source="purchasePriceTs" />
            <TextField label="startDate" source="startDate" />
            <TextField label="startDate_TS" source="startDateTs" />
            <TextField label="title" source="title" />
            <TextField label="title_TS" source="titleTs" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
