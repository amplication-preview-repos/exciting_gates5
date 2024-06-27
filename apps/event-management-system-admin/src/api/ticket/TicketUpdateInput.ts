import { PurchasedTicketUpdateManyWithoutTicketsInput } from "./PurchasedTicketUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  purchasedTickets?: PurchasedTicketUpdateManyWithoutTicketsInput;
  qrCode?: string | null;
  status?: "Option1" | null;
};
