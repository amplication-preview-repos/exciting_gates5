import { InputJsonValue } from "../../types";
import { SubAdminCreateNestedManyWithoutEventsInput } from "./SubAdminCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  approvedDate?: Date | null;
  coverImage?: string | null;
  description?: string | null;
  eventDate?: Date | null;
  eventLocation?: string | null;
  eventType?: string | null;
  guestPerformers?: InputJsonValue;
  isApproved?: boolean | null;
  subAdmins?: SubAdminCreateNestedManyWithoutEventsInput;
  ticketTiers?: InputJsonValue;
  title?: string | null;
  trailer?: string | null;
  user?: UserWhereUniqueInput | null;
};
