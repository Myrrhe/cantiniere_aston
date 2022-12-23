import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEditComponent } from './m-edit.component';

describe('MEditComponent', () => {
  let component: MEditComponent;
  let fixture: ComponentFixture<MEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
