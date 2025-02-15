import { Injectable } from '@nestjs/common';
@Injectable()
export class ReservationService {
    templates: Reservation[] = [];
    bodyInteger = 1
    
    async patchReservations(body: Reservation) {
        body.locationId = this.bodyInteger++;
        await this.templates.push(body)
        console.log(this.templates)
        return this.templates
    }
}