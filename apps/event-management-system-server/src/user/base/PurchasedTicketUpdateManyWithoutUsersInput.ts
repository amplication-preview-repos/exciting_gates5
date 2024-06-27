/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PurchasedTicketWhereUniqueInput } from "../../purchasedTicket/base/PurchasedTicketWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PurchasedTicketUpdateManyWithoutUsersInput {
  @Field(() => [PurchasedTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchasedTicketWhereUniqueInput],
  })
  connect?: Array<PurchasedTicketWhereUniqueInput>;

  @Field(() => [PurchasedTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchasedTicketWhereUniqueInput],
  })
  disconnect?: Array<PurchasedTicketWhereUniqueInput>;

  @Field(() => [PurchasedTicketWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchasedTicketWhereUniqueInput],
  })
  set?: Array<PurchasedTicketWhereUniqueInput>;
}

export { PurchasedTicketUpdateManyWithoutUsersInput as PurchasedTicketUpdateManyWithoutUsersInput };
