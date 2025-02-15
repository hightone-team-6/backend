import { Injectable } from '@nestjs/common';
import { Template } from './template.interface';
@Injectable()
export class TemplateService {
    templates: Template[] = [
      {
        imageUrls: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'],
        title: 'Template 1',
        tags: ['tag1', 'tag2'],
        templateId: 1,
      },
      {
        imageUrls: ['http://example.com/image3.jpg', 'http://example.com/image4.jpg'],
        title: 'Template 2',
        tags: ['tag3', 'tag4'],
        templateId: 2,
      },
    ];
    
    getTemplates() {
      return this.templates;
    }
}