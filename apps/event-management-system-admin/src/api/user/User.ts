import { Event } from "../event/Event";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { PurchasedTicket } from "../purchasedTicket/PurchasedTicket";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobile: string | null;
  nationality: string | null;
  nickName: string | null;
  notifications?: Array<Notification>;
  preferences: JsonValue;
  purchasedTickets?: Array<PurchasedTicket>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wallet?: Wallet | null;
};
