import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICertificadosComponent } from './icertificados.component';

describe('ICertificadosComponent', () => {
  let component: ICertificadosComponent;
  let fixture: ComponentFixture<ICertificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ICertificadosComponent]
    });
    fixture = TestBed.createComponent(ICertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
