import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchasedTicketResolverBase } from "./base/purchasedTicket.resolver.base";
import { PurchasedTicket } from "./base/PurchasedTicket";
import { PurchasedTicketService } from "./purchasedTicket.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchasedTicket)
export class PurchasedTicketResolver extends PurchasedTicketResolverBase {
  constructor(
    protected readonly service: PurchasedTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
