import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketTierWhereInput = {
  amountOnSale?: IntNullableFilter;
  amountOnSaleTs?: IntNullableFilter;
  amountSold?: IntNullableFilter;
  amountSoldTs?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  endDateTs?: DateTimeNullableFilter;
  id?: StringFilter;
  purchasePrice?: FloatNullableFilter;
  purchasePriceTs?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  startDateTs?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  titleTs?: StringNullableFilter;
};
