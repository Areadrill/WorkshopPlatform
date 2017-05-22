import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCreationFormComponent } from './workshop-creation-form.component';

describe('WorkshopCreationFormComponent', () => {
  let component: WorkshopCreationFormComponent;
  let fixture: ComponentFixture<WorkshopCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
