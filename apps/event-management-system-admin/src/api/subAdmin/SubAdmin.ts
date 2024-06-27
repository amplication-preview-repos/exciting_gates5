import { Event } from "../event/Event";
import { User } from "../user/User";

export type SubAdmin = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  isActive: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
