import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubAdminModuleBase } from "./base/subAdmin.module.base";
import { SubAdminService } from "./subAdmin.service";
import { SubAdminController } from "./subAdmin.controller";
import { SubAdminResolver } from "./subAdmin.resolver";

@Module({
  imports: [SubAdminModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubAdminController],
  providers: [SubAdminService, SubAdminResolver],
  exports: [SubAdminService],
})
export class SubAdminModule {}
