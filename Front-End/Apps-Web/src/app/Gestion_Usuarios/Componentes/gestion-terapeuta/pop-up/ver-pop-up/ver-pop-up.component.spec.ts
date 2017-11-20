import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPopUpComponent } from './ver-pop-up.component';

describe('VerPopUpComponent', () => {
  let component: VerPopUpComponent;
  let fixture: ComponentFixture<VerPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
