import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubAdminUpdateInput = {
  event?: EventWhereUniqueInput | null;
  isActive?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
