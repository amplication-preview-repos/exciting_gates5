import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
