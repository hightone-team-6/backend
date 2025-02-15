import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get()
    @ApiOperation({ summary: 'Return all of locations lists' })
    @ApiResponse({ status: 200, description: 'succeed' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async getTemplates() {
      return this.locationService.getLocations();
    }
}
