import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { DatabaseService } from 'src/utils/database.service';

@Module({
    imports: [],
    controllers: [LocationController],
    providers: [LocationService, DatabaseService],
})
export class LocationModule {}