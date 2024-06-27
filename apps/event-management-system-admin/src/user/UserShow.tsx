import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";
import { WALLET_TITLE_FIELD } from "../wallet/WalletTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="mobile" source="mobile" />
        <TextField label="nationality" source="nationality" />
        <TextField label="nickName" source="nickName" />
        <TextField label="preferences" source="preferences" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceField label="wallet" source="wallet.id" reference="Wallet">
          <TextField source={WALLET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Event" target="userId" label="Events">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="userId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="isRead" source="isRead" />
            <TextField label="link" source="link" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PurchasedTicket"
          target="userId"
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
      </SimpleShowLayout>
    </Show>
  );
};
