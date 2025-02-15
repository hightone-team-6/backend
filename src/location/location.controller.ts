import { Body, Controller, Get, Post, Query, Search } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiBody, ApiOperation, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get()
    @ApiOperation({ summary: 'Search values of location' })
    @ApiResponse({ status: 200, description: 'succeed' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    @ApiQuery({ name: 'search', required: false }) 
    async search(@Query('search') searchParam?: string) {
        const search = searchParam
        console.log(search)
        if (search) {
            return this.locationService.locations.filter(l => 
                (l.title.includes(search) || l.hashTags.some(tag => tag.includes(search))) || (l.description.includes(search))
            );
        }
        return this.locationService.getLocations();
    }
}
