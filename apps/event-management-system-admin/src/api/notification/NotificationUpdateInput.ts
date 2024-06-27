import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  description?: string | null;
  isRead?: boolean | null;
  link?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
