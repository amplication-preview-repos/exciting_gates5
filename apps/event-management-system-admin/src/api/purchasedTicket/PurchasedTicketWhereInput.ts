import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchasedTicketWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  qrCode?: StringNullableFilter;
  status?: "Option1";
  ticket?: TicketWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
