import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PurchasedTicketListRelationFilter } from "../purchasedTicket/PurchasedTicketListRelationFilter";
import { SubAdminListRelationFilter } from "../subAdmin/SubAdminListRelationFilter";
import { TicketTierListRelationFilter } from "../ticketTier/TicketTierListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  approvedDate?: DateTimeNullableFilter;
  coverImage?: StringFilter;
  description?: StringFilter;
  eventDate?: DateTimeFilter;
  eventLocation?: StringNullableFilter;
  eventType?: StringFilter;
  guestPerformers?: JsonFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  purchasedTickets?: PurchasedTicketListRelationFilter;
  subAdmins?: SubAdminListRelationFilter;
  ticketTiers?: TicketTierListRelationFilter;
  title?: StringFilter;
  trailer?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
