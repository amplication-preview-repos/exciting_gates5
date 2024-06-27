import { InputJsonValue } from "../../types";
import { SubAdminUpdateManyWithoutEventsInput } from "./SubAdminUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  approvedDate?: Date | null;
  coverImage?: string | null;
  description?: string | null;
  eventDate?: Date | null;
  eventLocation?: string | null;
  eventType?: string | null;
  guestPerformers?: InputJsonValue;
  isApproved?: boolean | null;
  subAdmins?: SubAdminUpdateManyWithoutEventsInput;
  ticketTiers?: InputJsonValue;
  title?: string | null;
  trailer?: string | null;
  user?: UserWhereUniqueInput | null;
};
