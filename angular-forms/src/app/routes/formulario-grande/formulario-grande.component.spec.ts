import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGrandeComponent } from './formulario-grande.component';

describe('FormularioGrandeComponent', () => {
  let component: FormularioGrandeComponent;
  let fixture: ComponentFixture<FormularioGrandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGrandeComponent]
    });
    fixture = TestBed.createComponent(FormularioGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
