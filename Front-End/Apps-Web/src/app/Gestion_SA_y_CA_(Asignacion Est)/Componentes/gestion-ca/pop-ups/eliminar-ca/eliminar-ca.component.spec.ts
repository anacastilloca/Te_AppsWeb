import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCaComponent } from './eliminar-ca.component';

describe('EliminarCaComponent', () => {
  let component: EliminarCaComponent;
  let fixture: ComponentFixture<EliminarCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
