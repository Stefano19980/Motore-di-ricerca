import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRicercaComponent } from './barra-ricerca.component';

describe('BarraRicercaComponent', () => {
  let component: BarraRicercaComponent;
  let fixture: ComponentFixture<BarraRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraRicercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
