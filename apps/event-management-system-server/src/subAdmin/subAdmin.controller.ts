import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubAdminService } from "./subAdmin.service";
import { SubAdminControllerBase } from "./base/subAdmin.controller.base";

@swagger.ApiTags("subAdmins")
@common.Controller("subAdmins")
export class SubAdminController extends SubAdminControllerBase {
  constructor(
    protected readonly service: SubAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
