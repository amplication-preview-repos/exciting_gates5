import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchasedTicketServiceBase } from "./base/purchasedTicket.service.base";

@Injectable()
export class PurchasedTicketService extends PurchasedTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
