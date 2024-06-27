import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type SubAdminWhereInput = {
  event?: EventWhereUniqueInput;
  eventRelation?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
};
