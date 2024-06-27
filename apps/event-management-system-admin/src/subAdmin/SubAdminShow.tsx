import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const SubAdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="eventRelation" source="eventRelation" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
