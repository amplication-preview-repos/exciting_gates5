import { SortOrder } from "../../util/SortOrder";

export type PurchasedTicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  qrCode?: SortOrder;
  status?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
