import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

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
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('file'))
    async reservationlocation(@Body() body: Reservation) {
        const res = await this.reservationService.patchReservations(body)
        console.log(res)
        return { 
            status: 200,
            content: "succeed" 
        }
    }
}
