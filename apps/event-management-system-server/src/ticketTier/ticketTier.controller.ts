import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketTierService } from "./ticketTier.service";
import { TicketTierControllerBase } from "./base/ticketTier.controller.base";

@swagger.ApiTags("ticketTiers")
@common.Controller("ticketTiers")
export class TicketTierController extends TicketTierControllerBase {
  constructor(
    protected readonly service: TicketTierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
