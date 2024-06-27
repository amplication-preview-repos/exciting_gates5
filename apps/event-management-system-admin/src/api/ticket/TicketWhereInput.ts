import { StringFilter } from "../../util/StringFilter";
import { PurchasedTicketListRelationFilter } from "../purchasedTicket/PurchasedTicketListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  purchasedTickets?: PurchasedTicketListRelationFilter;
  qrCode?: StringNullableFilter;
  status?: "Option1";
};
