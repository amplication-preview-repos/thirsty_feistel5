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
import { DriveFrequencyWhereUniqueInput } from "./DriveFrequencyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DriveFrequencyUpdateInput } from "./DriveFrequencyUpdateInput";

@ArgsType()
class UpdateDriveFrequencyArgs {
  @ApiProperty({
    required: true,
    type: () => DriveFrequencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriveFrequencyWhereUniqueInput)
  @Field(() => DriveFrequencyWhereUniqueInput, { nullable: false })
  where!: DriveFrequencyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DriveFrequencyUpdateInput,
  })
  @ValidateNested()
  @Type(() => DriveFrequencyUpdateInput)
  @Field(() => DriveFrequencyUpdateInput, { nullable: false })
  data!: DriveFrequencyUpdateInput;
}

export { UpdateDriveFrequencyArgs as UpdateDriveFrequencyArgs };
