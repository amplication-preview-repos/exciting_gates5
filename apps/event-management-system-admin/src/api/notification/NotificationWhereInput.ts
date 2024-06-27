import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
