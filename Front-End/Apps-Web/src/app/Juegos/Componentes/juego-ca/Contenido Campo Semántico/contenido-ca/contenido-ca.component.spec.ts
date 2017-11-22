import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCaComponent } from './contenido-ca.component';

describe('ContenidoCaComponent', () => {
  let component: ContenidoCaComponent;
  let fixture: ComponentFixture<ContenidoCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
