import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PurchasedTicketTitle } from "../purchasedTicket/PurchasedTicketTitle";
import { SubAdminTitle } from "../subAdmin/SubAdminTitle";
import { TicketTierTitle } from "../ticketTier/TicketTierTitle";
import { UserTitle } from "../user/UserTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="approvedDate" source="approvedDate" />
        <TextInput label="coverImage" source="coverImage" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="eventDate" source="eventDate" />
        <TextInput label="eventLocation" source="eventLocation" />
        <TextInput label="eventType" source="eventType" />
        <div />
        <BooleanInput label="isApproved" source="isApproved" />
        <ReferenceArrayInput
          source="purchasedTickets"
          reference="PurchasedTicket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchasedTicketTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subAdmins"
          reference="SubAdmin"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubAdminTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ticketTiers"
          reference="TicketTier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTierTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <TextInput label="trailer" source="trailer" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
