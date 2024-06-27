import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubAdminCreateNestedManyWithoutUsersInput } from "./SubAdminCreateNestedManyWithoutUsersInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  nationality?: string | null;
  nickName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  preferences?: InputJsonValue;
  roles: InputJsonValue;
  subAdmins?: SubAdminCreateNestedManyWithoutUsersInput;
  username: string;
  wallet?: WalletWhereUniqueInput | null;
};
