import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubAdminWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
