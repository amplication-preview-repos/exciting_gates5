import { JsonValue } from "type-fest";
import { SubAdmin } from "../subAdmin/SubAdmin";
import { User } from "../user/User";

export type Event = {
  approvedDate: Date | null;
  coverImage: string | null;
  createdAt: Date;
  description: string | null;
  eventDate: Date | null;
  eventLocation: string | null;
  eventType: string | null;
  guestPerformers: JsonValue;
  id: string;
  isApproved: boolean | null;
  subAdmins?: Array<SubAdmin>;
  ticketTiers: JsonValue;
  title: string | null;
  trailer: string | null;
  updatedAt: Date;
  user?: User | null;
};
