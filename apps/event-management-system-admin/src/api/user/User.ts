import { Event } from "../event/Event";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { SubAdmin } from "../subAdmin/SubAdmin";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobile: string | null;
  nationality: string | null;
  nickName: string | null;
  notifications?: Array<Notification>;
  preferences: JsonValue;
  roles: JsonValue;
  subAdmins?: Array<SubAdmin>;
  updatedAt: Date;
  username: string;
  wallet?: Wallet | null;
};
