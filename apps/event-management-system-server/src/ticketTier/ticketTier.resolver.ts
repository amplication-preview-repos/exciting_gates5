import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TicketTierResolverBase } from "./base/ticketTier.resolver.base";
import { TicketTier } from "./base/TicketTier";
import { TicketTierService } from "./ticketTier.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TicketTier)
export class TicketTierResolver extends TicketTierResolverBase {
  constructor(
    protected readonly service: TicketTierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
