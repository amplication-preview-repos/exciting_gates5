import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  qrCode?: StringNullableFilter;
  status?: "Option1";
};
