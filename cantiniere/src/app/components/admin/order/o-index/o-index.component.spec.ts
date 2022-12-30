import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OIndexComponent } from './o-index.component';

describe('OIndexComponent', () => {
  let component: OIndexComponent;
  let fixture: ComponentFixture<OIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
