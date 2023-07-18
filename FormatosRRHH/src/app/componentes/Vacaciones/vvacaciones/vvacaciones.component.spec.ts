import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVacacionesComponent } from './vvacaciones.component';

describe('VVacacionesComponent', () => {
  let component: VVacacionesComponent;
  let fixture: ComponentFixture<VVacacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VVacacionesComponent]
    });
    fixture = TestBed.createComponent(VVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
