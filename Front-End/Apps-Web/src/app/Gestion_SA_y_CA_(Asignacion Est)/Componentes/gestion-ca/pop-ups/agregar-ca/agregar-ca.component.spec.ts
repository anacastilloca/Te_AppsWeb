import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCaComponent } from './agregar-ca.component';

describe('AgregarCaComponent', () => {
  let component: AgregarCaComponent;
  let fixture: ComponentFixture<AgregarCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
