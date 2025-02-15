import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseService } from 'src/utils/database.service';

@Module({
    imports: [NestjsFormDataModule],
    controllers: [ReservationController],
    providers: [ReservationService, DatabaseService],
})
export class ReservationModule {}
