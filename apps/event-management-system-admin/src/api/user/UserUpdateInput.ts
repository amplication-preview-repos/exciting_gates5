import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { PurchasedTicketUpdateManyWithoutUsersInput } from "./PurchasedTicketUpdateManyWithoutUsersInput";
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
  purchasedTickets?: PurchasedTicketUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  wallet?: WalletWhereUniqueInput | null;
};
