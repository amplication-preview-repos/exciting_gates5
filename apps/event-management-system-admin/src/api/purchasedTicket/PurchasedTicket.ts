import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type PurchasedTicket = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  qrCode: string | null;
  status?: "Option1" | null;
  ticket?: Ticket | null;
  updatedAt: Date;
  user?: User | null;
};
