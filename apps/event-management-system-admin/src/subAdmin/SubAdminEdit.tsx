import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const SubAdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="eventRelation" source="eventRelation" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Edit>
  );
};
