import { JsonValue } from "type-fest";
import { PurchasedTicket } from "../purchasedTicket/PurchasedTicket";
import { SubAdmin } from "../subAdmin/SubAdmin";
import { TicketTier } from "../ticketTier/TicketTier";
import { User } from "../user/User";

export type Event = {
  approvedDate: Date | null;
  coverImage: string;
  createdAt: Date;
  description: string;
  eventDate: Date;
  eventLocation: string | null;
  eventType: string;
  guestPerformers: JsonValue;
  id: string;
  isApproved: boolean | null;
  purchasedTickets?: Array<PurchasedTicket>;
  subAdmins?: Array<SubAdmin>;
  ticketTiers?: Array<TicketTier>;
  title: string;
  trailer: string | null;
  updatedAt: Date;
  user?: User;
};
