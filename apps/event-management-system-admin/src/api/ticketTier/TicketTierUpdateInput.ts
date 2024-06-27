import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type TicketTierUpdateInput = {
  amountOnSale?: number | null;
  amountOnSaleTs?: number | null;
  amountSold?: number | null;
  amountSoldTs?: number | null;
  endDate?: Date | null;
  endDateTs?: Date | null;
  event?: EventWhereUniqueInput | null;
  purchasePrice?: number | null;
  purchasePriceTs?: number | null;
  startDate?: Date | null;
  startDateTs?: Date | null;
  title?: string | null;
  titleTs?: string | null;
};
