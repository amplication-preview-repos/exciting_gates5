import { PurchasedTicket as TPurchasedTicket } from "../api/purchasedTicket/PurchasedTicket";

export const PURCHASEDTICKET_TITLE_FIELD = "qrCode";

export const PurchasedTicketTitle = (record: TPurchasedTicket): string => {
  return record.qrCode?.toString() || String(record.id);
};
