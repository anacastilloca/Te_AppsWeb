import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSaComponent } from './asignacion-sa.component';

describe('AsignacionSaComponent', () => {
  let component: AsignacionSaComponent;
  let fixture: ComponentFixture<AsignacionSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
