/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LengthService } from "../length.service";
import { LengthCreateInput } from "./LengthCreateInput";
import { Length } from "./Length";
import { LengthFindManyArgs } from "./LengthFindManyArgs";
import { LengthWhereUniqueInput } from "./LengthWhereUniqueInput";
import { LengthUpdateInput } from "./LengthUpdateInput";

export class LengthControllerBase {
  constructor(protected readonly service: LengthService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Length })
  async createLength(@common.Body() data: LengthCreateInput): Promise<Length> {
    return await this.service.createLength({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Length] })
  @ApiNestedQuery(LengthFindManyArgs)
  async lengths(@common.Req() request: Request): Promise<Length[]> {
    const args = plainToClass(LengthFindManyArgs, request.query);
    return this.service.lengths({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Length })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async length(
    @common.Param() params: LengthWhereUniqueInput
  ): Promise<Length | null> {
    const result = await this.service.length({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Length })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLength(
    @common.Param() params: LengthWhereUniqueInput,
    @common.Body() data: LengthUpdateInput
  ): Promise<Length | null> {
    try {
      return await this.service.updateLength({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Length })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLength(
    @common.Param() params: LengthWhereUniqueInput
  ): Promise<Length | null> {
    try {
      return await this.service.deleteLength({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}