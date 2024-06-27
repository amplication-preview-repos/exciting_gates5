import { registerEnumType } from "@nestjs/graphql";

export enum EnumTransactionType {
    Deposit = "Deposit",
    Withdrawal = "Withdrawal",
    Spending = "Spending"
}

registerEnumType(EnumTransactionType, {
    name: "EnumTransactionType",
  });