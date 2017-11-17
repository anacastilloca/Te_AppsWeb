import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPopUpComponent } from './agregar-pop-up.component';

describe('AgregarPopUpComponent', () => {
  let component: AgregarPopUpComponent;
  let fixture: ComponentFixture<AgregarPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
