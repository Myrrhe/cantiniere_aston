import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UEditComponent } from './u-edit.component';

describe('UEditComponent', () => {
  let component: UEditComponent;
  let fixture: ComponentFixture<UEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
