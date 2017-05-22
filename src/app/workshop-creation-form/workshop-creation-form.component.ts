import { WorkshopService } from './../workshops.service';
import { Workshop } from './../Workshop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-creation-form',
  templateUrl: './workshop-creation-form.component.html',
  styleUrls: ['./workshop-creation-form.component.css']
})
export class WorkshopCreationFormComponent implements OnInit {

  private title: string;
  private date: string;
  private cost: number;
  private description: string;

  constructor(private wsService: WorkshopService) { }

  ngOnInit() {
  }

  createWorkshop() {
    this.wsService.createWorkshop(new Workshop(this.title, this.date, this.cost, this.description));
  }

}
