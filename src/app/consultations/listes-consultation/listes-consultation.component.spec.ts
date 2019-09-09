import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesConsultationComponent } from './listes-consultation.component';

describe('ListesConsultationComponent', () => {
  let component: ListesConsultationComponent;
  let fixture: ComponentFixture<ListesConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
