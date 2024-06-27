import { Event } from "../event/Event";

export type SubAdmin = {
  createdAt: Date;
  event?: Event | null;
  eventRelation: string | null;
  id: string;
  isActive: boolean | null;
  updatedAt: Date;
};
