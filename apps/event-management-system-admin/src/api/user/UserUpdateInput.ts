import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubAdminUpdateManyWithoutUsersInput } from "./SubAdminUpdateManyWithoutUsersInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  nationality?: string | null;
  nickName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  preferences?: InputJsonValue;
  roles?: InputJsonValue;
  subAdmins?: SubAdminUpdateManyWithoutUsersInput;
  username?: string;
  wallet?: WalletWhereUniqueInput | null;
};
