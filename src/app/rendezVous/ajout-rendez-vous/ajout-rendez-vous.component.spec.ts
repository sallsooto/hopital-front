import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRendezVousComponent } from './ajout-rendez-vous.component';

describe('AjoutRendezVousComponent', () => {
  let component: AjoutRendezVousComponent;
  let fixture: ComponentFixture<AjoutRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
