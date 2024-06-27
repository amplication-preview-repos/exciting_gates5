import { SubAdmin as TSubAdmin } from "../api/subAdmin/SubAdmin";

export const SUBADMIN_TITLE_FIELD = "id";

export const SubAdminTitle = (record: TSubAdmin): string => {
  return record.id?.toString() || String(record.id);
};
