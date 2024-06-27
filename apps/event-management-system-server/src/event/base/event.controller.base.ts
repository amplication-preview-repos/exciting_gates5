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
import { EventService } from "../event.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventCreateInput } from "./EventCreateInput";
import { Event } from "./Event";
import { EventFindManyArgs } from "./EventFindManyArgs";
import { EventWhereUniqueInput } from "./EventWhereUniqueInput";
import { EventUpdateInput } from "./EventUpdateInput";
import { PurchasedTicketFindManyArgs } from "../../purchasedTicket/base/PurchasedTicketFindManyArgs";
import { PurchasedTicket } from "../../purchasedTicket/base/PurchasedTicket";
import { PurchasedTicketWhereUniqueInput } from "../../purchasedTicket/base/PurchasedTicketWhereUniqueInput";
import { SubAdminFindManyArgs } from "../../subAdmin/base/SubAdminFindManyArgs";
import { SubAdmin } from "../../subAdmin/base/SubAdmin";
import { SubAdminWhereUniqueInput } from "../../subAdmin/base/SubAdminWhereUniqueInput";
import { TicketTierFindManyArgs } from "../../ticketTier/base/TicketTierFindManyArgs";
import { TicketTier } from "../../ticketTier/base/TicketTier";
import { TicketTierWhereUniqueInput } from "../../ticketTier/base/TicketTierWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventControllerBase {
  constructor(
    protected readonly service: EventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Event })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: EventCreateInput,
  })
  async createEvent(@common.Body() data: EventCreateInput): Promise<Event> {
    return await this.service.createEvent({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        approvedDate: true,
        coverImage: true,
        createdAt: true,
        description: true,
        eventDate: true,
        eventLocation: true,
        eventType: true,
        guestPerformers: true,
        id: true,
        isApproved: true,
        title: true,
        trailer: true,
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
  @swagger.ApiOkResponse({ type: [Event] })
  @ApiNestedQuery(EventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async events(@common.Req() request: Request): Promise<Event[]> {
    const args = plainToClass(EventFindManyArgs, request.query);
    return this.service.events({
      ...args,
      select: {
        approvedDate: true,
        coverImage: true,
        createdAt: true,
        description: true,
        eventDate: true,
        eventLocation: true,
        eventType: true,
        guestPerformers: true,
        id: true,
        isApproved: true,
        title: true,
        trailer: true,
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
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async event(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    const result = await this.service.event({
      where: params,
      select: {
        approvedDate: true,
        coverImage: true,
        createdAt: true,
        description: true,
        eventDate: true,
        eventLocation: true,
        eventType: true,
        guestPerformers: true,
        id: true,
        isApproved: true,
        title: true,
        trailer: true,
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
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: EventUpdateInput,
  })
  async updateEvent(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() data: EventUpdateInput
  ): Promise<Event | null> {
    try {
      return await this.service.updateEvent({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          approvedDate: true,
          coverImage: true,
          createdAt: true,
          description: true,
          eventDate: true,
          eventLocation: true,
          eventType: true,
          guestPerformers: true,
          id: true,
          isApproved: true,
          title: true,
          trailer: true,
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
  @swagger.ApiOkResponse({ type: Event })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEvent(
    @common.Param() params: EventWhereUniqueInput
  ): Promise<Event | null> {
    try {
      return await this.service.deleteEvent({
        where: params,
        select: {
          approvedDate: true,
          coverImage: true,
          createdAt: true,
          description: true,
          eventDate: true,
          eventLocation: true,
          eventType: true,
          guestPerformers: true,
          id: true,
          isApproved: true,
          title: true,
          trailer: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/purchasedTickets")
  @ApiNestedQuery(PurchasedTicketFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PurchasedTicket",
    action: "read",
    possession: "any",
  })
  async findPurchasedTickets(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<PurchasedTicket[]> {
    const query = plainToClass(PurchasedTicketFindManyArgs, request.query);
    const results = await this.service.findPurchasedTickets(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,

        ticketTier: {
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/purchasedTickets")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async connectPurchasedTickets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: PurchasedTicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasedTickets: {
        connect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/purchasedTickets")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updatePurchasedTickets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: PurchasedTicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasedTickets: {
        set: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/purchasedTickets")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async disconnectPurchasedTickets(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: PurchasedTicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchasedTickets: {
        disconnect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/subAdmins")
  @ApiNestedQuery(SubAdminFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SubAdmin",
    action: "read",
    possession: "any",
  })
  async findSubAdmins(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<SubAdmin[]> {
    const query = plainToClass(SubAdminFindManyArgs, request.query);
    const results = await this.service.findSubAdmins(params.id, {
      ...query,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        isActive: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/subAdmins")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async connectSubAdmins(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: SubAdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subAdmins: {
        connect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/subAdmins")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateSubAdmins(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: SubAdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subAdmins: {
        set: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/subAdmins")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async disconnectSubAdmins(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: SubAdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subAdmins: {
        disconnect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ticketTiers")
  @ApiNestedQuery(TicketTierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TicketTier",
    action: "read",
    possession: "any",
  })
  async findTicketTiers(
    @common.Req() request: Request,
    @common.Param() params: EventWhereUniqueInput
  ): Promise<TicketTier[]> {
    const query = plainToClass(TicketTierFindManyArgs, request.query);
    const results = await this.service.findTicketTiers(params.id, {
      ...query,
      select: {
        amountOnSale: true,
        amountSold: true,
        createdAt: true,
        endDate: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        purchasePrice: true,
        startDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ticketTiers")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async connectTicketTiers(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: TicketTierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketTiers: {
        connect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ticketTiers")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async updateTicketTiers(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: TicketTierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketTiers: {
        set: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ticketTiers")
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "update",
    possession: "any",
  })
  async disconnectTicketTiers(
    @common.Param() params: EventWhereUniqueInput,
    @common.Body() body: TicketTierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketTiers: {
        disconnect: body,
      },
    };
    await this.service.updateEvent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
