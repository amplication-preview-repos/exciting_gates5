export type TicketTier = {
  amountOnSale: number | null;
  amountOnSaleTs: number | null;
  amountSold: number | null;
  amountSoldTs: number | null;
  createdAt: Date;
  endDate: Date | null;
  endDateTs: Date | null;
  id: string;
  purchasePrice: number | null;
  purchasePriceTs: number | null;
  startDate: Date | null;
  startDateTs: Date | null;
  title: string | null;
  titleTs: string | null;
  updatedAt: Date;
};
