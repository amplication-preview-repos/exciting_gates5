import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketTierModuleBase } from "./base/ticketTier.module.base";
import { TicketTierService } from "./ticketTier.service";
import { TicketTierController } from "./ticketTier.controller";
import { TicketTierResolver } from "./ticketTier.resolver";

@Module({
  imports: [TicketTierModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketTierController],
  providers: [TicketTierService, TicketTierResolver],
  exports: [TicketTierService],
})
export class TicketTierModule {}
