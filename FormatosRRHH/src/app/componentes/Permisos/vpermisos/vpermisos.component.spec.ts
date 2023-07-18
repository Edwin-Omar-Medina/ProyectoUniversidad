import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPermisosComponent } from './vpermisos.component';

describe('VPermisosComponent', () => {
  let component: VPermisosComponent;
  let fixture: ComponentFixture<VPermisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VPermisosComponent]
    });
    fixture = TestBed.createComponent(VPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
