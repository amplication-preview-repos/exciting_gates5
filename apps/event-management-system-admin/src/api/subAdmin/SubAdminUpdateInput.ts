import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SubAdminUpdateInput = {
  event?: EventWhereUniqueInput | null;
  eventRelation?: string | null;
  isActive?: boolean | null;
};
