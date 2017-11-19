import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPopUpComponent } from './eliminar-pop-up.component';

describe('EliminarPopUpComponent', () => {
  let component: EliminarPopUpComponent;
  let fixture: ComponentFixture<EliminarPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
