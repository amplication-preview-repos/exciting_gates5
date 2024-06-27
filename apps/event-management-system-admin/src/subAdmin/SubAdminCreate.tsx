import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const SubAdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="eventRelation" source="eventRelation" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Create>
  );
};
