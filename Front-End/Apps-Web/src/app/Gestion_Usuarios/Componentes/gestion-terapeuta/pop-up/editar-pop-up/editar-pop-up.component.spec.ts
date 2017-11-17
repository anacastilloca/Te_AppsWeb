import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPopUpComponent } from './editar-pop-up.component';

describe('EditarPopUpComponent', () => {
  let component: EditarPopUpComponent;
  let fixture: ComponentFixture<EditarPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
