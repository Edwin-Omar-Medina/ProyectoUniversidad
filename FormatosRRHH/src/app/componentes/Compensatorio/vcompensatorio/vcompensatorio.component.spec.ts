import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCompensatorioComponent } from './vcompensatorio.component';

describe('VCompensatorioComponent', () => {
  let component: VCompensatorioComponent;
  let fixture: ComponentFixture<VCompensatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VCompensatorioComponent]
    });
    fixture = TestBed.createComponent(VCompensatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
