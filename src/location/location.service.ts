import { Injectable } from "@nestjs/common";
import { Location } from "./location.interface";
@Injectable()
export class LocationService {
    private readonly locations: Location[] = [
        {
            imageUrls: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'],
            title: 'Location 1',
            location: '서울특별시 중구 세종대로 110',
            description: 'Description 1',
            templateId: 1,
            locationId: 1 
        }, {
            imageUrls: ['http://example.com/image3.jpg', 'http://example.com/image4.jpg'],
            title: 'Location 2',
            location: '서울특별시 중구 세종대로 111',
            description: 'Description 2',
            templateId: 2,
            locationId: 2 
        },
    ];
    
    getLocations() {
      return this.locations;
    }
}