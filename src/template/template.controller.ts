import { Controller, Get, Query } from '@nestjs/common';
import { TemplateService } from './template.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('templates')
@Controller('templates')
export class TemplateController {
    constructor(private readonly templateService: TemplateService) {}

    @Get()
    @ApiOperation({ summary: 'Return all of templates lists' })
    @ApiResponse({ status: 200, description: 'succeed' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async getTemplates() {
      return this.templateService.getTemplates();
    }
}
