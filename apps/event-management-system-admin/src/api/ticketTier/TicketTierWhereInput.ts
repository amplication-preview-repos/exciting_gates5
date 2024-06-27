import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
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
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  purchasePrice?: FloatNullableFilter;
  purchasePriceTs?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  startDateTs?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  titleTs?: StringNullableFilter;
};
