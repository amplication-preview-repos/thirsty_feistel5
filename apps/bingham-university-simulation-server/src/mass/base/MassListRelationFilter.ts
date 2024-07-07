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
import { MassWhereInput } from "./MassWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MassListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MassWhereInput,
  })
  @ValidateNested()
  @Type(() => MassWhereInput)
  @IsOptional()
  @Field(() => MassWhereInput, {
    nullable: true,
  })
  every?: MassWhereInput;

  @ApiProperty({
    required: false,
    type: () => MassWhereInput,
  })
  @ValidateNested()
  @Type(() => MassWhereInput)
  @IsOptional()
  @Field(() => MassWhereInput, {
    nullable: true,
  })
  some?: MassWhereInput;

  @ApiProperty({
    required: false,
    type: () => MassWhereInput,
  })
  @ValidateNested()
  @Type(() => MassWhereInput)
  @IsOptional()
  @Field(() => MassWhereInput, {
    nullable: true,
  })
  none?: MassWhereInput;
}
export { MassListRelationFilter as MassListRelationFilter };
