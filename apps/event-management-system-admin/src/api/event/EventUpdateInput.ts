import { InputJsonValue } from "../../types";
import { PurchasedTicketUpdateManyWithoutEventsInput } from "./PurchasedTicketUpdateManyWithoutEventsInput";
import { SubAdminUpdateManyWithoutEventsInput } from "./SubAdminUpdateManyWithoutEventsInput";
import { TicketTierUpdateManyWithoutEventsInput } from "./TicketTierUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  approvedDate?: Date | null;
  coverImage?: string;
  description?: string;
  eventDate?: Date;
  eventLocation?: string | null;
  eventType?: string;
  guestPerformers?: InputJsonValue;
  isApproved?: boolean | null;
  purchasedTickets?: PurchasedTicketUpdateManyWithoutEventsInput;
  subAdmins?: SubAdminUpdateManyWithoutEventsInput;
  ticketTiers?: TicketTierUpdateManyWithoutEventsInput;
  title?: string;
  trailer?: string | null;
  user?: UserWhereUniqueInput;
};
