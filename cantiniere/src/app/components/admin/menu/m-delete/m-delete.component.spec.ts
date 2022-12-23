import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDeleteComponent } from './m-delete.component';

describe('MDeleteComponent', () => {
  let component: MDeleteComponent;
  let fixture: ComponentFixture<MDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
