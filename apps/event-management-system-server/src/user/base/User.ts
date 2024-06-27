/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  ValidateNested,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Preference } from "../../preference/base/Preference";
import { Event } from "../../event/base/Event";
import { Notification } from "../../notification/base/Notification";
import { PurchasedTicket } from "../../purchasedTicket/base/PurchasedTicket";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { SubAdmin } from "../../subAdmin/base/SubAdmin";
import { Wallet } from "../../wallet/base/Wallet";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Preference],
  })
  @ValidateNested()
  @Type(() => Preference)
  @IsOptional()
  eventPreferences?: Array<Preference>;

  @ApiProperty({
    required: false,
    type: () => [Event],
  })
  @ValidateNested()
  @Type(() => Event)
  @IsOptional()
  events?: Array<Event>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isBan!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mobile!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nationality!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nickName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Notification],
  })
  @ValidateNested()
  @Type(() => Notification)
  @IsOptional()
  notifications?: Array<Notification>;

  @ApiProperty({
    required: false,
    type: () => [PurchasedTicket],
  })
  @ValidateNested()
  @Type(() => PurchasedTicket)
  @IsOptional()
  purchasedTickets?: Array<PurchasedTicket>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [SubAdmin],
  })
  @ValidateNested()
  @Type(() => SubAdmin)
  @IsOptional()
  subAdmins?: Array<SubAdmin>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => Wallet,
  })
  @ValidateNested()
  @Type(() => Wallet)
  @IsOptional()
  wallet?: Wallet | null;
}

export { User as User };
