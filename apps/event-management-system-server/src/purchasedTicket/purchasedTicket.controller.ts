import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchasedTicketService } from "./purchasedTicket.service";
import { PurchasedTicketControllerBase } from "./base/purchasedTicket.controller.base";

@swagger.ApiTags("purchasedTickets")
@common.Controller("purchasedTickets")
export class PurchasedTicketController extends PurchasedTicketControllerBase {
  constructor(
    protected readonly service: PurchasedTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
