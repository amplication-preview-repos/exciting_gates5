import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { WalletModule } from "./wallet/wallet.module";
import { EventModule } from "./event/event.module";
import { NotificationModule } from "./notification/notification.module";
import { UserModule } from "./user/user.module";
import { SubAdminModule } from "./subAdmin/subAdmin.module";
import { TicketTierModule } from "./ticketTier/ticketTier.module";
import { TransactionModule } from "./transaction/transaction.module";
import { PurchasedTicketModule } from "./purchasedTicket/purchasedTicket.module";
import { PreferenceModule } from "./preference/preference.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    WalletModule,
    EventModule,
    NotificationModule,
    UserModule,
    SubAdminModule,
    TicketTierModule,
    TransactionModule,
    PurchasedTicketModule,
    PreferenceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
