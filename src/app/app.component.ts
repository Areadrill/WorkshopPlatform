import { Component, OnInit } from '@angular/core';

import { WorkshopService } from './workshops.service';

import { Workshop } from './Workshop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public constructor(private wss: WorkshopService){}

  private workshopList: Workshop[];

  public ngOnInit(){
    console.log(this.wss.getWorkshopList());
  }
}
