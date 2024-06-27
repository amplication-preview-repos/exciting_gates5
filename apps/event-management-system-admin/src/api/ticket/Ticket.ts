import { PurchasedTicket } from "../purchasedTicket/PurchasedTicket";

export type Ticket = {
  createdAt: Date;
  id: string;
  purchasedTickets?: Array<PurchasedTicket>;
  qrCode: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
