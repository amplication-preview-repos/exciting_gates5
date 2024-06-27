import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubAdminResolverBase } from "./base/subAdmin.resolver.base";
import { SubAdmin } from "./base/SubAdmin";
import { SubAdminService } from "./subAdmin.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubAdmin)
export class SubAdminResolver extends SubAdminResolverBase {
  constructor(
    protected readonly service: SubAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
