import { Injectable } from '@angular/core';

import { Workshop } from "./Workshop";

@Injectable()
export class WorkshopService{

    public constructor(){}

    public async getWorkshopList(){
        let ws: Workshop[] = [];
        const result = JSON.parse(await this.simulateServerGetWorkshops());
        result.forEach((element, i, arr) => {
                ws.push(<Workshop>element);
         });
         return ws;
    }

    private simulateServerGetWorkshops(): Promise<any>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.workshopJSON), 1000);
        });
    }

    private workshopJSON = `[
            {"title": "Workshop Angular", "date": "24/05/17", "cost": 0.00, "description": "Workshop on one of the most famous and disruptive frontend technologies right now."},
            {"title": "Workshop Linux", "date": "17/06/17", "cost": 5.00, "description": "Workshop on one of the most famous operating systems ever."},
            {"title": "Workshop Python", "date": "05/06/17", "cost": 5.00, "description": "Workshop on the renowned language that allows for incredibly easy data control."},
            {"title": "Workshop Java", "date": "23/06/17", "cost": 5.00, "description": "Workshop on the fully object oriented language that is most used around the world."},
            {"title": "Workshop Git", "date": "29/06/17", "cost": 5.00, "description": "Workshop on THE version control system."},
            {"title": "Workshop C++", "date": "07/07/17", "cost": 5.00, "description": "Workshop on one of the fastest and most used languages."},
            {"title": "Workshop C#", "date": "17/07/17", "cost": 5.00, "description": "I ran out of ideas right about now."}
        ]`;
}  