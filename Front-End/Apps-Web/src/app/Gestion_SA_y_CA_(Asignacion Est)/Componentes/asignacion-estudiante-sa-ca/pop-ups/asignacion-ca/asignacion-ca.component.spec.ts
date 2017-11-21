import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCaComponent } from './asignacion-ca.component';

describe('AsignacionCaComponent', () => {
  let component: AsignacionCaComponent;
  let fixture: ComponentFixture<AsignacionCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
