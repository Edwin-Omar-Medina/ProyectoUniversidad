import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPermisosComponent } from './ipermisos.component';

describe('IPermisosComponent', () => {
  let component: IPermisosComponent;
  let fixture: ComponentFixture<IPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IPermisosComponent]
    });
    fixture = TestBed.createComponent(IPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
