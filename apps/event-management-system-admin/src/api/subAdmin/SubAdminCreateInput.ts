import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SubAdminCreateInput = {
  event?: EventWhereUniqueInput | null;
  eventRelation?: string | null;
  isActive?: boolean | null;
};
