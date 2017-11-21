import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCaComponent } from './editar-ca.component';

describe('EditarCaComponent', () => {
  let component: EditarCaComponent;
  let fixture: ComponentFixture<EditarCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
