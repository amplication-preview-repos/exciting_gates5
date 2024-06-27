import { JsonValue } from "type-fest";

export type Admin = {
  bannedUsers: JsonValue;
  createdAt: Date;
  id: string;
  managedEvents: JsonValue;
  updatedAt: Date;
};
