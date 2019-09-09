import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesConsultationDossierComponent } from './listes-consultation-dossier.component';

describe('ListesConsultationDossierComponent', () => {
  let component: ListesConsultationDossierComponent;
  let fixture: ComponentFixture<ListesConsultationDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesConsultationDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesConsultationDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
