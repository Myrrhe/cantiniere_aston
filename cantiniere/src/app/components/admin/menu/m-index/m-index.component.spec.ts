import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIndexComponent } from './m-index.component';

describe('MIndexComponent', () => {
  let component: MIndexComponent;
  let fixture: ComponentFixture<MIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
