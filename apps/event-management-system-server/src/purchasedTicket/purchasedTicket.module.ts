import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchasedTicketModuleBase } from "./base/purchasedTicket.module.base";
import { PurchasedTicketService } from "./purchasedTicket.service";
import { PurchasedTicketController } from "./purchasedTicket.controller";
import { PurchasedTicketResolver } from "./purchasedTicket.resolver";

@Module({
  imports: [PurchasedTicketModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchasedTicketController],
  providers: [PurchasedTicketService, PurchasedTicketResolver],
  exports: [PurchasedTicketService],
})
export class PurchasedTicketModule {}
