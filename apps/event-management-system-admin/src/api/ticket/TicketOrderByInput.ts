import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  qrCode?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
