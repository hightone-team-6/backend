import { Module } from '@nestjs/common';
import { TemplateModule } from './template/template.module';
import { ReservationModule } from './reservation/reservation.module';
import { LocationModule } from './location/location.module';

@Module({
    imports: [TemplateModule, ReservationModule, LocationModule]
})
export class AppModule {}
