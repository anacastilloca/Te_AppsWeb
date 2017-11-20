import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEstudianteSaCaComponent } from './asignacion-estudiante-sa-ca.component';

describe('AsignacionEstudianteSaCaComponent', () => {
  let component: AsignacionEstudianteSaCaComponent;
  let fixture: ComponentFixture<AsignacionEstudianteSaCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionEstudianteSaCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEstudianteSaCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
