import { PurchasedTicketCreateNestedManyWithoutTicketsInput } from "./PurchasedTicketCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  purchasedTickets?: PurchasedTicketCreateNestedManyWithoutTicketsInput;
  qrCode?: string | null;
  status?: "Option1" | null;
};
