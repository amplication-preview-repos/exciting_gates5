import { InputJsonValue } from "../../types";
import { PurchasedTicketCreateNestedManyWithoutEventsInput } from "./PurchasedTicketCreateNestedManyWithoutEventsInput";
import { SubAdminCreateNestedManyWithoutEventsInput } from "./SubAdminCreateNestedManyWithoutEventsInput";
import { TicketTierCreateNestedManyWithoutEventsInput } from "./TicketTierCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  approvedDate?: Date | null;
  coverImage: string;
  description: string;
  eventDate: Date;
  eventLocation?: string | null;
  eventType: string;
  guestPerformers?: InputJsonValue;
  isApproved?: boolean | null;
  purchasedTickets?: PurchasedTicketCreateNestedManyWithoutEventsInput;
  subAdmins?: SubAdminCreateNestedManyWithoutEventsInput;
  ticketTiers?: TicketTierCreateNestedManyWithoutEventsInput;
  title: string;
  trailer?: string | null;
  user: UserWhereUniqueInput;
};
