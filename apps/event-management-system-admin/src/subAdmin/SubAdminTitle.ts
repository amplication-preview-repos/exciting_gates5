import { SubAdmin as TSubAdmin } from "../api/subAdmin/SubAdmin";

export const SUBADMIN_TITLE_FIELD = "eventRelation";

export const SubAdminTitle = (record: TSubAdmin): string => {
  return record.eventRelation?.toString() || String(record.id);
};
