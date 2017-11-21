import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCaComponent } from './juego-ca.component';

describe('JuegoCaComponent', () => {
  let component: JuegoCaComponent;
  let fixture: ComponentFixture<JuegoCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
