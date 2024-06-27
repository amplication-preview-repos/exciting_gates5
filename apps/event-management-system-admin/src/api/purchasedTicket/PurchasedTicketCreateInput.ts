import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchasedTicketCreateInput = {
  event?: EventWhereUniqueInput | null;
  qrCode?: string | null;
  status?: "Option1" | null;
  ticket?: TicketWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
