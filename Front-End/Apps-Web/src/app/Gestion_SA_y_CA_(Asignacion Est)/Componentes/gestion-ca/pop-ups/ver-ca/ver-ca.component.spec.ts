import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCaComponent } from './ver-ca.component';

describe('VerCaComponent', () => {
  let component: VerCaComponent;
  let fixture: ComponentFixture<VerCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
