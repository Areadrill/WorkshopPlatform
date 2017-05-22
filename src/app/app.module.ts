import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { WorkshopService } from './workshops.service';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';

const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    WorkshopDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [WorkshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
