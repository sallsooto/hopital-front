import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConsultationComponent } from './ajout-consultation.component';

describe('AjoutConsultationComponent', () => {
  let component: AjoutConsultationComponent;
  let fixture: ComponentFixture<AjoutConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
