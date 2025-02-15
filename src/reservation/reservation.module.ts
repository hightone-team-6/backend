import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
    imports: [NestjsFormDataModule],
    controllers: [ReservationController],
    providers: [ReservationService],
})
export class ReservationModule {}
