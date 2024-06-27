import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  bannedUsers?: JsonFilter;
  id?: StringFilter;
  managedEvents?: JsonFilter;
};
