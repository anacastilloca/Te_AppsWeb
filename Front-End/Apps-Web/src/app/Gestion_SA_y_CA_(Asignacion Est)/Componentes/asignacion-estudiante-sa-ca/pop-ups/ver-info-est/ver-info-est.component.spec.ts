import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoEstComponent } from './ver-info-est.component';

describe('VerInfoEstComponent', () => {
  let component: VerInfoEstComponent;
  let fixture: ComponentFixture<VerInfoEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInfoEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
