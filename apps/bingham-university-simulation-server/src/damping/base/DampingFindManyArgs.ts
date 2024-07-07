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
import { DampingWhereInput } from "./DampingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DampingOrderByInput } from "./DampingOrderByInput";

@ArgsType()
class DampingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DampingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DampingWhereInput, { nullable: true })
  @Type(() => DampingWhereInput)
  where?: DampingWhereInput;

  @ApiProperty({
    required: false,
    type: [DampingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DampingOrderByInput], { nullable: true })
  @Type(() => DampingOrderByInput)
  orderBy?: Array<DampingOrderByInput>;

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

export { DampingFindManyArgs as DampingFindManyArgs };
