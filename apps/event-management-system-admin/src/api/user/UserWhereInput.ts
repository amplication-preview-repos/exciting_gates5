import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PurchasedTicketListRelationFilter } from "../purchasedTicket/PurchasedTicketListRelationFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobile?: StringNullableFilter;
  nationality?: StringNullableFilter;
  nickName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  preferences?: JsonFilter;
  purchasedTickets?: PurchasedTicketListRelationFilter;
  username?: StringFilter;
  wallet?: WalletWhereUniqueInput;
};
