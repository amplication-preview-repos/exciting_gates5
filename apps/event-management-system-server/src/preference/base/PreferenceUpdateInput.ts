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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { UserUpdateManyWithoutPreferencesInput } from "./UserUpdateManyWithoutPreferencesInput";
import { Type } from "class-transformer";

@InputType()
class PreferenceUpdateInput {
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
  description?: string | null;

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
  image?: string | null;

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
  title?: string;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutPreferencesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutPreferencesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutPreferencesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutPreferencesInput;
}

export { PreferenceUpdateInput as PreferenceUpdateInput };
