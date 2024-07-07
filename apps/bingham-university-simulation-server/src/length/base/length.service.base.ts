/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Length as PrismaLength } from "@prisma/client";

export class LengthServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LengthCountArgs, "select">): Promise<number> {
    return this.prisma.length.count(args);
  }

  async lengths(args: Prisma.LengthFindManyArgs): Promise<PrismaLength[]> {
    return this.prisma.length.findMany(args);
  }
  async length(
    args: Prisma.LengthFindUniqueArgs
  ): Promise<PrismaLength | null> {
    return this.prisma.length.findUnique(args);
  }
  async createLength(args: Prisma.LengthCreateArgs): Promise<PrismaLength> {
    return this.prisma.length.create(args);
  }
  async updateLength(args: Prisma.LengthUpdateArgs): Promise<PrismaLength> {
    return this.prisma.length.update(args);
  }
  async deleteLength(args: Prisma.LengthDeleteArgs): Promise<PrismaLength> {
    return this.prisma.length.delete(args);
  }
}