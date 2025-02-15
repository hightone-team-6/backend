import { Body, Controller, Get, Query, Search } from '@nestjs/common';
import { TemplateService } from './template.service';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('templates')
@Controller('templates')
export class TemplateController {
    constructor(private readonly templateService: TemplateService) {}

    @Get()
    @ApiOperation({ summary: 'Search values of templates' })
    @ApiResponse({ status: 200, description: 'succeed' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    @ApiQuery({ name: 'search', required: false }) 
    async search(@Query('search') searchParam?: string) {
        const search = searchParam
        console.log(search)
        if (search) {
            return this.templateService.templates.filter(t => 
                (t.title.includes(search) || t.tags.some(tag => tag.includes(search)))
            );
        }
        return this.templateService.getTemplates();
    }
}
