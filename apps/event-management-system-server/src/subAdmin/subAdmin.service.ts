import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubAdminServiceBase } from "./base/subAdmin.service.base";

@Injectable()
export class SubAdminService extends SubAdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
