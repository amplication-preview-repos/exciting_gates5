import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "pin";

export const WalletTitle = (record: TWallet): string => {
  return record.pin?.toString() || String(record.id);
};
