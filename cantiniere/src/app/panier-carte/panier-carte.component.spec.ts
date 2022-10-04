import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierCarteComponent } from './panier-carte.component';

describe('PanierCarteComponent', () => {
  let component: PanierCarteComponent;
  let fixture: ComponentFixture<PanierCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
