import { Module } from '@nestjs/common';
import { TemplateModule } from './template/template.module';
import { ReservationModule } from './reservation/reservation.module';
import { LocationModule } from './location/location.module';
import { DatabaseService } from './utils/database.service';

@Module({
    imports: [TemplateModule, ReservationModule, LocationModule],
    controllers: [],
    providers: [DatabaseService]
})
export class AppModule {}
