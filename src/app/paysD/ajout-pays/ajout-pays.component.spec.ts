import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPaysComponent } from './ajout-pays.component';

describe('AjoutPaysComponent', () => {
  let component: AjoutPaysComponent;
  let fixture: ComponentFixture<AjoutPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
