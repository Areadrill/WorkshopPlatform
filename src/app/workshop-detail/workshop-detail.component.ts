import { Workshop } from './../Workshop';
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() workshop: Workshop;


}
