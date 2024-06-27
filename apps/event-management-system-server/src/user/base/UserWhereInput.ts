/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { EventListRelationFilter } from "../../event/base/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../../notification/base/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PurchasedTicketListRelationFilter } from "../../purchasedTicket/base/PurchasedTicketListRelationFilter";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventListRelationFilter)
  @IsOptional()
  @Field(() => EventListRelationFilter, {
    nullable: true,
  })
  events?: EventListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  mobile?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nationality?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nickName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => NotificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NotificationListRelationFilter)
  @IsOptional()
  @Field(() => NotificationListRelationFilter, {
    nullable: true,
  })
  notifications?: NotificationListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  preferences?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => PurchasedTicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchasedTicketListRelationFilter)
  @IsOptional()
  @Field(() => PurchasedTicketListRelationFilter, {
    nullable: true,
  })
  purchasedTickets?: PurchasedTicketListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WalletWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WalletWhereUniqueInput)
  @IsOptional()
  @Field(() => WalletWhereUniqueInput, {
    nullable: true,
  })
  wallet?: WalletWhereUniqueInput;
}

export { UserWhereInput as UserWhereInput };
