import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketTierServiceBase } from "./base/ticketTier.service.base";

@Injectable()
export class TicketTierService extends TicketTierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
