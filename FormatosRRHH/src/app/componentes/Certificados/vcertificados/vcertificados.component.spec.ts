import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCertificadosComponent } from './vcertificados.component';

describe('VCertificadosComponent', () => {
  let component: VCertificadosComponent;
  let fixture: ComponentFixture<VCertificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VCertificadosComponent]
    });
    fixture = TestBed.createComponent(VCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
