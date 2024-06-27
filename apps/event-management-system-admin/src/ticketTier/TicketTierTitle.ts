import { TicketTier as TTicketTier } from "../api/ticketTier/TicketTier";

export const TICKETTIER_TITLE_FIELD = "title";

export const TicketTierTitle = (record: TTicketTier): string => {
  return record.title?.toString() || String(record.id);
};
