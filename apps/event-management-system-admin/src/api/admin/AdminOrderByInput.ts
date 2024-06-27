import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  bannedUsers?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  managedEvents?: SortOrder;
  updatedAt?: SortOrder;
};
