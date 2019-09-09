import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementAjoutComponent } from './departement-ajout.component';

describe('DepartementAjoutComponent', () => {
  let component: DepartementAjoutComponent;
  let fixture: ComponentFixture<DepartementAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
