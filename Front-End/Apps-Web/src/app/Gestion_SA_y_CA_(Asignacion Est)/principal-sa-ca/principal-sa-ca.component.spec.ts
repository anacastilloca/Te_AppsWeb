import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSaCaComponent } from './principal-sa-ca.component';

describe('PrincipalSaCaComponent', () => {
  let component: PrincipalSaCaComponent;
  let fixture: ComponentFixture<PrincipalSaCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSaCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSaCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
