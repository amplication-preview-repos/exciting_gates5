import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SubAdminListRelationFilter } from "../subAdmin/SubAdminListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  approvedDate?: DateTimeNullableFilter;
  coverImage?: StringNullableFilter;
  description?: StringNullableFilter;
  eventDate?: DateTimeNullableFilter;
  eventLocation?: StringNullableFilter;
  eventType?: StringNullableFilter;
  guestPerformers?: JsonFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  subAdmins?: SubAdminListRelationFilter;
  ticketTiers?: JsonFilter;
  title?: StringNullableFilter;
  trailer?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
