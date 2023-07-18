import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICompensatorioComponent } from './icompensatorio.component';

describe('ICompensatorioComponent', () => {
  let component: ICompensatorioComponent;
  let fixture: ComponentFixture<ICompensatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ICompensatorioComponent]
    });
    fixture = TestBed.createComponent(ICompensatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
