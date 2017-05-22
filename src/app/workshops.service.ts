import { Injectable } from '@angular/core';

import { Workshop } from "./Workshop";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WorkshopService {


    private workshopJSON = [
            {"title": "Workshop Angular", "date": "24/05/17", "cost": 0.00, "description": "Workshop on one of the most famous and disruptive frontend technologies right now."},
            {"title": "Workshop Linux", "date": "17/06/17", "cost": 5.00, "description": "Workshop on one of the most famous operating systems ever."},
            {"title": "Workshop Python", "date": "05/06/17", "cost": 5.00, "description": "Workshop on the renowned language that allows for incredibly easy data control."},
            {"title": "Workshop Java", "date": "23/06/17", "cost": 5.00, "description": "Workshop on the fully object oriented language that is most used around the world."},
            {"title": "Workshop Git", "date": "29/06/17", "cost": 5.00, "description": "Workshop on THE version control system."},
            {"title": "Workshop C++", "date": "07/07/17", "cost": 5.00, "description": "Workshop on one of the fastest and most used languages."},
            {"title": "Workshop C#", "date": "17/07/17", "cost": 5.00, "description": "I ran out of ideas right about now."}
    ];
    private workshopAnnouncer: BehaviorSubject<any> = new BehaviorSubject(this.workshopJSON);

    public constructor() { }


    public createWorkshop(workshop: Workshop) {
        this.workshopJSON.push({
                title: workshop.title,
                description: workshop.description,
                cost: workshop.cost,
                date: workshop.date,
            });
        this.workshopAnnouncer.next(this.workshopJSON);
    }


    public simulateServerGetWorkshops(): Observable<Workshop[]> {
        return this.workshopAnnouncer.asObservable().delay(1000);
    }

}
