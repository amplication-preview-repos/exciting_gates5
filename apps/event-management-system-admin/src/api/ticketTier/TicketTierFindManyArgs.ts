import { TicketTierWhereInput } from "./TicketTierWhereInput";
import { TicketTierOrderByInput } from "./TicketTierOrderByInput";

export type TicketTierFindManyArgs = {
  where?: TicketTierWhereInput;
  orderBy?: Array<TicketTierOrderByInput>;
  skip?: number;
  take?: number;
};
