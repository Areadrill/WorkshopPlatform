import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { WorkshopService } from './workshops.service';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { WorkshopCreationFormComponent } from './workshop-creation-form/workshop-creation-form.component';

const routes: Routes = [
  {path: "create-form", component: WorkshopCreationFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkshopDetailComponent,
    WorkshopCreationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WorkshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
