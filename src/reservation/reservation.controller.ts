import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

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
            file: { type: 'string', format: 'binary' },
            description: { type: 'string' }
          },
        },
    })
    async reservationlocation(@Body() body: Reservation) {
        const res = await this.reservationService.patchReservations(body)
        console.log(res)
        return { content: "succeed" }
    }
}
