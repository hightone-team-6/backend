import { Injectable } from '@nestjs/common';
@Injectable()
export class ReservationService {
    private templates: Reservation[] = [];
    
    async patchReservations(body: Reservation) {
        await this.templates.push(body)
        console.log(this.templates)
        return this.templates
    }
}