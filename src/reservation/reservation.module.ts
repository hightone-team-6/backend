import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';

@Module({
    imports: [],
    controllers: [ReservationController],
    providers: [ReservationService],
})
export class ReservationModule {}
