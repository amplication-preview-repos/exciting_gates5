import { PurchasedTicketWhereInput } from "./PurchasedTicketWhereInput";
import { PurchasedTicketOrderByInput } from "./PurchasedTicketOrderByInput";

export type PurchasedTicketFindManyArgs = {
  where?: PurchasedTicketWhereInput;
  orderBy?: Array<PurchasedTicketOrderByInput>;
  skip?: number;
  take?: number;
};
