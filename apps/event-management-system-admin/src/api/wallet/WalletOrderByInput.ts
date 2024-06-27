import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pin?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
