import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  approvedDate?: SortOrder;
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  eventDate?: SortOrder;
  eventLocation?: SortOrder;
  eventType?: SortOrder;
  guestPerformers?: SortOrder;
  id?: SortOrder;
  isApproved?: SortOrder;
  title?: SortOrder;
  trailer?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
