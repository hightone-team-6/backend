import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    @ApiOperation({ summary: 'Put reservations in data store' })
    @ApiResponse({ status: 200, description: 'succeed' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    @ApiBody({
        schema: {
          properties: {
            locationId: { type: 'number' },
            files: { type: 'string', format: 'binary' },
            request: { type: 'string' },
            name: { type: 'string' },
            tel: { type: 'string' },
            month: { type: 'number'},
            reservationDates: { type: 'array',
                items: { type: 'number' } }
          },
        }, 
    })
    @FormDataRequest()
    async reservationlocation(@Body() body: Reservation) {
        const res = await this.reservationService.patchReservations(body)
        return { 
            status: 200,
            content: res
        }
    }

    @Get()
    async getReservation() {
        return this.reservationService.templates;
    }
}
