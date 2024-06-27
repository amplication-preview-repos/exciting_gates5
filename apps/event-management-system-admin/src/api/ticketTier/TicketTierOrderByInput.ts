import { SortOrder } from "../../util/SortOrder";

export type TicketTierOrderByInput = {
  amountOnSale?: SortOrder;
  amountOnSaleTs?: SortOrder;
  amountSold?: SortOrder;
  amountSoldTs?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  endDateTs?: SortOrder;
  id?: SortOrder;
  purchasePrice?: SortOrder;
  purchasePriceTs?: SortOrder;
  startDate?: SortOrder;
  startDateTs?: SortOrder;
  title?: SortOrder;
  titleTs?: SortOrder;
  updatedAt?: SortOrder;
};
