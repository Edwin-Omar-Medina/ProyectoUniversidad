import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVacacionesComponent } from './ivacaciones.component';

describe('IVacacionesComponent', () => {
  let component: IVacacionesComponent;
  let fixture: ComponentFixture<IVacacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IVacacionesComponent]
    });
    fixture = TestBed.createComponent(IVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
