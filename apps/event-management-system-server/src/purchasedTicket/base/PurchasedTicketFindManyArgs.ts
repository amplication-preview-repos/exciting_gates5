/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchasedTicketWhereInput } from "./PurchasedTicketWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PurchasedTicketOrderByInput } from "./PurchasedTicketOrderByInput";

@ArgsType()
class PurchasedTicketFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchasedTicketWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PurchasedTicketWhereInput, { nullable: true })
  @Type(() => PurchasedTicketWhereInput)
  where?: PurchasedTicketWhereInput;

  @ApiProperty({
    required: false,
    type: [PurchasedTicketOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PurchasedTicketOrderByInput], { nullable: true })
  @Type(() => PurchasedTicketOrderByInput)
  orderBy?: Array<PurchasedTicketOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PurchasedTicketFindManyArgs as PurchasedTicketFindManyArgs };
