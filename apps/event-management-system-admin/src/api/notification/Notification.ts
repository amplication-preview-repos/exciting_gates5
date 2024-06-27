import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  description: string | null;
  id: string;
  isRead: boolean | null;
  link: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
