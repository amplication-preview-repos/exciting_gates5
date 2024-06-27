/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PurchasedTicketService } from "../purchasedTicket.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PurchasedTicketCreateInput } from "./PurchasedTicketCreateInput";
import { PurchasedTicket } from "./PurchasedTicket";
import { PurchasedTicketFindManyArgs } from "./PurchasedTicketFindManyArgs";
import { PurchasedTicketWhereUniqueInput } from "./PurchasedTicketWhereUniqueInput";
import { PurchasedTicketUpdateInput } from "./PurchasedTicketUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PurchasedTicketControllerBase {
  constructor(
    protected readonly service: PurchasedTicketService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PurchasedTicket })
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPurchasedTicket(
    @common.Body() data: PurchasedTicketCreateInput
  ): Promise<PurchasedTicket> {
    return await this.service.createPurchasedTicket({
      data: {
        ...data,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,

        ticket: data.ticket
          ? {
              connect: data.ticket,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        qrCode: true,
        status: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PurchasedTicket] })
  @ApiNestedQuery(PurchasedTicketFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async purchasedTickets(
    @common.Req() request: Request
  ): Promise<PurchasedTicket[]> {
    const args = plainToClass(PurchasedTicketFindManyArgs, request.query);
    return this.service.purchasedTickets({
      ...args,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        qrCode: true,
        status: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PurchasedTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async purchasedTicket(
    @common.Param() params: PurchasedTicketWhereUniqueInput
  ): Promise<PurchasedTicket | null> {
    const result = await this.service.purchasedTicket({
      where: params,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        qrCode: true,
        status: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PurchasedTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePurchasedTicket(
    @common.Param() params: PurchasedTicketWhereUniqueInput,
    @common.Body() data: PurchasedTicketUpdateInput
  ): Promise<PurchasedTicket | null> {
    try {
      return await this.service.updatePurchasedTicket({
        where: params,
        data: {
          ...data,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,

          ticket: data.ticket
            ? {
                connect: data.ticket,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          qrCode: true,
          status: true,

          ticket: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PurchasedTicket })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePurchasedTicket(
    @common.Param() params: PurchasedTicketWhereUniqueInput
  ): Promise<PurchasedTicket | null> {
    try {
      return await this.service.deletePurchasedTicket({
        where: params,
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          qrCode: true,
          status: true,

          ticket: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
