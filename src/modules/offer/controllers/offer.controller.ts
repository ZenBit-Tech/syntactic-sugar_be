import {
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Offer } from 'src/database/entities/offers.entity';
import { ActivatedGuard } from 'src/modules/auth/guards/activated.guard';
import { AuthJwtGuard } from 'src/modules/auth/guards/authJwt.guard';
import { RolesGuard } from 'src/modules/auth/guards/role.guard';
import { Routes, Services, UserRoles } from 'src/utils/constants';
import { Roles } from 'src/utils/decorators/roles';
import { CreateOfferDto } from 'src/modules/offer/dto/createOffer.dto';
import { IOfferService } from 'src/modules/offer/interfaces/IOfferService';

@ApiTags('offers')
@Controller('offer')
export class OfferController {
  constructor(@Inject(Services.OFFER) private offerService: IOfferService) {}

  @ApiOperation({ summary: 'Create offer for freelancer' })
  @ApiBody({ type: CreateOfferDto })
  @ApiResponse({ status: 201, description: 'Offer created' })
  @UseGuards(AuthJwtGuard, ActivatedGuard, RolesGuard)
  @Roles(UserRoles.EMPLOYER)
  @UsePipes(ValidationPipe)
  @Post(Routes.CREATE_OFFER)
  createOffer(@Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerService.createOffer(createOfferDto);
  }
}
